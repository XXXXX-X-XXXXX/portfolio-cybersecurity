import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    supabase
      .from("portfolio_comments")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setComments(data || []));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await supabase.from("portfolio_comments").insert([
      {
        content: msg,
        user_name: name,
        is_pinned: false,
      },
    ]);
    setName(""); setMsg("");
    // Rafraîchit les commentaires
    const { data } = await supabase
      .from("portfolio_comments")
      .select("*")
      .order("created_at", { ascending: false });
    setComments(data || []);
  };

  return (
    <div>
      <form className="mb-6" onSubmit={submit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Ton nom"
          className="w-full mb-3 rounded-lg p-2 bg-[#23262a] text-white border border-[#36393f] focus:border-[#93979b] outline-none transition"
        />
        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          required
          placeholder="Écris ton avis ici…"
          className="w-full mb-3 rounded-lg p-2 bg-[#23262a] text-white border border-[#36393f] focus:border-[#93979b] outline-none transition resize-none"
          rows={3}
        />
        <button
          className="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-[#9CA3AF] to-[#333] text-white shadow hover:scale-105 transition"
          type="submit"
        >
          Poster l’avis
        </button>
      </form>
      <div className="space-y-4">
        {comments.map(comment => (
          <div
            key={comment.id}
            className="rounded-xl px-5 py-4 border border-[#36393f] bg-opacity-0 flex flex-col"
            // Pas de bg, juste border + texte
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#83868d] text-lg">{comment.user_name}</span>
              <span className="text-xs text-gray-400 ml-2">
                {comment.created_at && new Date(comment.created_at).toLocaleString()}
              </span>
            </div>
            <div className="mt-2 text-white font-medium">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
