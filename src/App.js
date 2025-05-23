import KeyboardDemo from "./components/KeyboardDemo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-12 px-4 sm:px-6">
      <header className="w-full max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Keyboard Task
        </h1>
        <p className="mt-3 text-lg text-gray-600 text-center">
          Virtual Keyboard – Task Submission for Flego Innovation
        </p>
      </header>

      <main className="w-full flex-1">
        <KeyboardDemo />
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Created with React, Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
