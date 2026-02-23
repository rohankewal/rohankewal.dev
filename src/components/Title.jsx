export default function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold mb-5 text-gray-900 dark:text-gray-100"
    >
      {children}
    </h1>
  );
}
