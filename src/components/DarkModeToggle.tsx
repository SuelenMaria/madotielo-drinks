export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      🌙
    </button>
  );
}