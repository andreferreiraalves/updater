import MainLayoutComponent from "../components/MainLayoutComponent";

function HomePage() {
  return (
    <MainLayoutComponent title="Bem vindo ao instalador">
      <div className="overflow-scroll md:h-[60vh] h-[40vh] m-5">
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          Prezado Cliente,
        </p>
        <br />
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          Bem vindo à crescente família de usuários do APP Ceasa - Soluções para
          Gestão de Permiss. Ceasa. O APP Ceasa é o produto da larga experiência
          da APP Sistemas em soluções para permissionário ceasa. É a quarta
          geração de software desenvolvida pela empresa para esse setor de
          mercado. Portanto, a cada etapa (ou geração) cumprida pela APP
          Sistemas novos recursos foram implementados garantindo ganhos de
          produtividade, facilidade e segurança.
        </p>
        <br />
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          CÓPIA DEMONSTRAÇÃO
        </p>
        <br />
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          Durante a instalação do Software são adicionados dois atalhos em sua
          área
        </p>
      </div>
    </MainLayoutComponent>
  );
}

export default HomePage;
