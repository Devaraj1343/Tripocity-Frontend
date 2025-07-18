export default function Login({ onClose }) {
  return (
    <div className="fixed inset-0 dark:bg-bg-dark dark:text-text-dark bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-bg-dark text-black dark:text-text-dark p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4 text-center">Login</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="dark:bg-bg-dark dark:text-text-darke dark:border-gray-700 dark:focus:border px-4 py-2 border rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="dark:bg-bg-dark dark:text-text-dark dark:border-gray-700 dark:focus:border px-4 py-2 border rounded-md outline-none"
          />


          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
