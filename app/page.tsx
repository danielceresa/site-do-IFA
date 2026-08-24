import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-5 pt-8 pb-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-pretty sm:text-4xl">
              PEGADA HÍDRICA:
              <br />
              <span className="text-brand-green">CONCEITOS E SUAS APLICAÇÕES</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Entenda o consumo do seu dia a dia e aprenda a reduzir o seu impacto
            </p>
          </div>
          <img
            src="/images/mao-planeta-agua.png?v=2"
            alt="Mão segurando o planeta Terra feito de água"
            className="w-52 shrink-0 sm:w-64"
          />
        </div>
      </section>

      {/* O QUE É */}
      <section className="mx-auto max-w-3xl px-5 py-6">
        <h2 className="font-heading text-xl font-extrabold uppercase text-brand-green-dark sm:text-2xl">
          O que é a pegada hídrica?
        </h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground">
          <p className="indent-6">
            A pegada hídrica é um indicador que mede o <strong>volume total de água doce</strong> usado de forma{" "}
            <strong>direta e indireta</strong> para produzir os bens e serviços que consumimos ou para sustentar as
            atividades de uma pessoa, empresa ou comunidade, revelando a &ldquo;água invisível&rdquo; gasta em toda a
            cadeia produtiva.
          </p>
          <p className="indent-6">
            Essa abordagem revela que a economia de água vai muito além de fechar a torneira ao escovar os dentes,
            englobando também o que <strong>comemos</strong>, <strong>vestimos</strong> e <strong>compramos</strong>.
            Quando entendemos o peso hídrico de cada produto, passamos a avaliar nossas decisões diárias com mais
            maturidade e responsabilidade.
          </p>
        </div>

        {/* Caixa destaque: pegada de carbono */}
        <div className="mt-6 rounded-md bg-brand-highlight px-5 py-4 text-brand-highlight-foreground">
          <p className="text-[15px] leading-relaxed">
            A pegada hídrica é semelhante à <strong>pegada de carbono</strong>, que mede o total de emissões de gases de
            efeito estufa geradas direta e indiretamente por uma pessoa, organização, produto, evento ou atividade.
          </p>
        </div>
      </section>

      {/* Infográfico */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <img
            src="/images/infografico-agua.png"
            alt="Infográfico 'A água que você não vê': litros de água necessários para produzir itens do cotidiano, como carne de boi (17.100 L), arroz (2.500 L) e manteiga (18.000 L)"
            className="mx-auto w-full max-w-xl rounded-md"
          />
        </div>
      </section>

      {/* Classificações */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h2 className="font-heading text-xl font-extrabold uppercase leading-tight text-brand-green-dark sm:text-2xl">
          Quais as classificações da pegada hídrica?
        </h2>
        <p className="mt-3 indent-6 text-[15px] leading-relaxed">
          A Pegada Hídrica pode ser classificada em três tipos principais: a <strong>verde</strong> (água da chuva
          retida no solo e usada pelas plantas), a <strong>azul</strong> (água doce de rios, lagos ou aquíferos
          consumida em processos) e a <strong>cinza</strong> (volume de água necessário para diluir poluentes gerados
          na produção).
        </p>

        {/* AZUL */}
        <h3 className="mt-8 font-heading text-lg font-extrabold uppercase text-brand-cyan sm:text-xl">
          Pegada hídrica azul
        </h3>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
          <p className="indent-6 text-[15px] leading-relaxed">
            É um indicador que mede o volume de água <strong>doce superficial</strong> ou{" "}
            <strong>subterrânea consumida</strong> (evaporada, incorporada em um produto ou retirada de uma bacia e não
            devolvida) na fabricação de bens ou na prestação de serviços.
          </p>
          <div className="grid w-full shrink-0 grid-cols-3 gap-1 sm:w-56">
            <img
              src="/images/azul-rio.png"
              alt="Rio de água doce com margens verdes"
              className="h-24 w-full rounded-sm object-cover"
            />
            <img
              src="/images/azul-lago.png"
              alt="Lago de montanha com água cristalina"
              className="h-24 w-full rounded-sm object-cover"
            />
            <img
              src="/images/azul-poco.png"
              alt="Poço de captação de água subterrânea"
              className="h-24 w-full rounded-sm object-cover"
            />
          </div>
        </div>
        <p className="mt-3 indent-6 text-[15px] leading-relaxed">
          Suas principais origens são rios, lagos e aquíferos, e seus usos centrais dividem-se em agricultura irrigada,
          processos industriais e consumo doméstico.
        </p>

        {/* VERDE */}
        <h3 className="mt-10 text-center font-heading text-lg font-extrabold uppercase text-brand-cyan sm:text-xl">
          Pegada hídrica verde
        </h3>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
          <img
            src="/images/copo-chuva.png?v=2"
            alt="Copo de água sendo enchido pela chuva"
            className="w-full shrink-0 rounded-md border-4 border-white shadow-sm sm:w-48"
          />
          <div className="space-y-3 text-right text-[15px] leading-relaxed">
            <p>
              É o volume de água da chuva que fica armazenado no solo e é absorvido pelas plantas durante o crescimento.
              Ela é essencial para a agricultura, pois mede a umidade natural usada em plantações sem exigir irrigação
              artificial.
            </p>
            <p>
              Suas principais origens são rios, lagos e aquíferos, e seus usos centrais dividem-se em agricultura
              irrigada, processos industriais e consumo doméstico.
            </p>
          </div>
        </div>

        {/* CINZA */}
        <h3 className="mt-10 text-center font-heading text-lg font-extrabold uppercase text-brand-cyan sm:text-xl">
          Pegada hídrica cinza
        </h3>
        <p className="mt-3 text-center text-[15px] leading-relaxed">
          É um indicador ambiental que mede o volume de água doce necessário para diluir os poluentes gerados em um
          processo produtivo, de modo que a água residual atinja os padrões legais de qualidade. Junto com a água verde
          (chuva) e a azul (rios e aquíferos), ela compõe o conceito global de pegada hídrica.
        </p>

        <div className="mt-4 rounded-md border-2 border-brand-purple px-5 py-3">
          <p className="text-center text-[15px] leading-relaxed">
            Suas principais fontes geradoras envolvem a agricultura (com o uso de fertilizantes e agrotóxicos), a
            indústria (com despejos de efluentes químicos) e o saneamento urbano (esgotos não tratados).
          </p>
        </div>

        <img
          src="/images/agua-poluida.png"
          alt="Água poluída com lixo e resíduos plásticos"
          className="mx-auto mt-5 w-full max-w-sm rounded-md"
        />
      </section>

      {/* COMO REDUZIR */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-heading text-xl font-extrabold uppercase leading-tight text-brand-green-dark sm:text-2xl">
            Como reduzir sua pegada hídrica?
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
            <p className="indent-6">
              Os consumidores comuns podem mudar seus hábitos diários para evitar o desperdício encurtando o banho e
              fechando o registro enquanto ensaboam. Além disso, manter a torneira fechada durante a escovação dos
              dentes também ajuda.
            </p>
            <p className="indent-6">
              Outra dica é consumir de produtores, especialmente os pequenos, que estão comprometidos com a redução da
              pegada hídrica. Também é válido adotar o consumo circular, consumindo de brechós, por exemplo, ou trocando
              roupas com conhecidos.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
