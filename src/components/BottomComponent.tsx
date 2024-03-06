function BottomComponent() {
  return (
    <div className="flex justify-between m-5">
      <div>
        <p className="text-xl">
          Você pode ler mais nas{" "}
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Notas
          </a>{" "}
          da atualização
        </p>
      </div>
      <button
        type="button"
        className="text-white bg-primary hover:bg-primary-600 focus:ring-4 focus:bg-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none h-14 w-28"
      >
        Action button
      </button>
    </div>
  );
}

export default BottomComponent;
