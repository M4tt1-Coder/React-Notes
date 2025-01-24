/**
 *  Specifies the main navigation button component.
 *
 * @returns Main Navigation Button Component
 */
function GoToMainPage() {
  return (
    <>
      <button
        className="p-3 text-xl font-sans font-semibold bg-black text-white transition-all duration-700 absolute top-4 left-4 rounded-xl hover:bg-white hover:text-black hover:ring-2 hover:ring-black"
        type="button"
      >
        <a href="/">Back</a>
      </button>
    </>
  );
}

export default GoToMainPage;
