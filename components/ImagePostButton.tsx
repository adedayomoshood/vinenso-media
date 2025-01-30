interface ButtonProps {
  title: string;
}

export default function ImagePostButton({ title }: ButtonProps) {
  return (
    <button className="py-2 px-4 rounded-xl border border-secondary">
      {title}
    </button>
  );
}
