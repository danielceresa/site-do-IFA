import { SiteHeader } from "@/components/site-header"
import { PieChart } from "@/components/pie-chart"

const GOOGLE = {
  blue: "#4285f4",
  red: "#db4437",
  orange: "#f4b400",
  green: "#0f9d58",
}

export default function MatematicaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-5 pt-8 pb-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <img
            src="/images/mat-gota-agua.png"
            alt="Gota d'água caindo e formando ondas em uma superfície de água"
            className="w-44 shrink-0 rounded-full sm:w-56"
          />
          <div className="max-w-md text-right">
            <h1 className="font-heading text-2xl font-extrabold leading-tight text-pretty sm:text-4xl">
              MUITO ALÉM DA TORNEIRA:
              <br />
              <span className="text-brand-cyan">O DESPERDÍCIO VISÍVEL E INVISÍVEL</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Entenda as formas de desperdício direta e indireta de água
            </p>
          </div>
        </div>
      </section>

      {/* A IMPORTÂNCIA DA ÁGUA */}
      <section className="mx-auto max-w-3xl px-5 py-6">
        <h2 className="font-heading text-xl font-extrabold uppercase text-brand-blue sm:text-2xl">
          A importância da água
        </h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground">
          <p className="indent-6">
            A água é um dos elementos essenciais para o desenvolvimento do nosso planeta e sociedade. Todos precisamos
            de água para viver: beber, cozinhar, lavar, se banhar, etc.
          </p>
          <p className="indent-6">
            Os animais também necessitam de água para realizar diversas funções vitais. Nesse sentido, fica claro que a
            água é um dos mais importantes bens naturais que possuímos e a falta dessa fonte de vida pode gerar diversos
            problemas à nossa saúde.
          </p>
          <p className="indent-6">
            Além da escassez, a poluição das águas gera diversas doenças que podem levar à morte dos seres vivos.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-[#cdeae6] px-6 py-5 text-center text-[#1f6b64]">
          <p className="text-[15px] leading-relaxed">
            A água potável é um direito humano fundamental. Preservá-la é garantir a saúde, a biodiversidade e o futuro
            da sociedade.
          </p>
        </div>
      </section>

      {/* DESPERDÍCIO DE ÁGUA VISÍVEL */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-heading text-xl font-extrabold uppercase text-brand-blue sm:text-2xl">
            Desperdício de água visível
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
            <p className="indent-6">
              O desperdício de água visível (também chamado de uso direto) é aquele que você consegue enxergar
              acontecendo no seu dia a dia. Trata-se da perda de água tratada e potável diretamente na fonte de uso, sem
              que ela seja aproveitada de forma útil.
            </p>
            <p>Veja os principais exemplos de desperdício de água visível:</p>
          </div>
        </div>
      </section>

      {/* BANHO DIÁRIO */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h3 className="font-heading text-lg font-extrabold uppercase text-brand-blue sm:text-xl">Banho diário</h3>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="space-y-3 text-[15px] leading-relaxed">
            <p>
              O banho diário é uma das atividades domésticas que mais consomem água tratada, e a duração do banho aliada
              ao tipo de equipamento define diretamente o tamanho do desperdício.
            </p>
            <p>
              Um banho de <strong>15 minutos</strong> em uma ducha de alta pressão pode gastar até{" "}
              <strong>200 litros de água</strong>. Se o tempo for reduzido para 5 minutos, o consumo cai para
              aproximadamente 50 a 60 litros, economizando mais de 100 litros em uma única lavagem.
            </p>
          </div>
          <div className="w-full shrink-0 sm:max-w-xs">
            <PieChart
              question="Quanto tempo, em média, dura o seu banho diário?"
              responses={109}
              data={[
                { label: "Até 5 min", value: 10.1, color: GOOGLE.blue },
                { label: "5 a 10 min", value: 31.2, color: GOOGLE.red },
                { label: "10 a 15 min", value: 33, color: GOOGLE.orange },
                { label: "Mais de 15 min", value: 25.7, color: GOOGLE.green },
              ]}
            />
          </div>
        </div>
      </section>

      {/* DESCARTE INCORRETO DO ÓLEO */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h3 className="font-heading text-lg font-extrabold uppercase text-brand-blue sm:text-xl">
            Descarte incorreto do óleo
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed">
            O descarte incorreto do óleo de cozinha pelo ralo da pia impacta o desperdício e a contaminação da água de
            duas maneiras principais:
          </p>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="w-full shrink-0 sm:max-w-xs">
              <PieChart
                question="Onde são descartados restos de óleo de cozinha ou medicamentos vencidos na sua casa?"
                responses={109}
                data={[
                  { label: "No ralo da pia ou vaso sanitário", value: 19.3, color: GOOGLE.blue },
                  { label: "No lixo comum", value: 33.9, color: GOOGLE.red },
                  { label: "Em pontos de coleta seletiva", value: 46.8, color: GOOGLE.orange },
                ]}
              />
            </div>
            <ul className="space-y-3 text-[15px] leading-relaxed">
              <li>
                <strong>Contaminação em Grande Escala:</strong> Apenas 1 litro de óleo jogado no ralo é capaz de
                contaminar até 25 mil litros de água potável. Ele cria uma camada impermeável sobre a água que impede a
                entrada de luz e oxigênio.
              </li>
              <li>
                <strong>Gasto Extra de Água na Limpeza:</strong> O óleo esfria e se fixa nas paredes das tubulações
                domésticas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VAZAMENTOS DE TORNEIRAS */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h3 className="font-heading text-lg font-extrabold uppercase text-brand-blue sm:text-xl">
          Vazamentos de torneiras
        </h3>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="space-y-3 text-[15px] leading-relaxed">
            <p>
              As torneiras pingando são uma das formas mais sorrateiras de desperdício visível, pois a falsa sensação de
              que é &ldquo;apenas uma gota&rdquo; faz com que o vazamento seja ignorado por dias ou semanas.
            </p>
            <p>
              Um gotejamento lento (cerca de 1 gota por segundo) desperdiça{" "}
              <strong>aproximadamente 46 litros de água por dia</strong>. Em um único mês, isso equivale a mais de 1.300
              litros de água limpa e tratada jogados direto no ralo.
            </p>
            <p>
              Ao contrário do banho, que dura alguns minutos, a torneira pinga 24 horas por dia. Esse consumo constante
              e imperceptível transforma pequenos defeitos em <strong>toneladas de água</strong> desperdiçada ao longo
              do ano.
            </p>
          </div>
          <div className="w-full shrink-0 sm:max-w-xs">
            <PieChart
              question="Você já observou alguma torneira ou vaso sanitário gotejando ou com vazamento em sua casa ou na escola e avisou?"
              responses={109}
              data={[
                { label: "Sim", value: 46.8, color: GOOGLE.blue },
                { label: "Não", value: 20.2, color: GOOGLE.red },
                { label: "Nunca reparei", value: 33, color: GOOGLE.orange },
              ]}
            />
          </div>
        </div>
      </section>

      {/* DESPERDÍCIO DE ÁGUA INVISÍVEL */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-heading text-xl font-extrabold uppercase text-brand-blue sm:text-2xl">
            Desperdício de água invisível
          </h2>
          <p className="mt-3 indent-6 text-[15px] leading-relaxed">
            O desperdício de água invisível (ou consumo indireto) é aquele que não sai da sua torneira, mas está
            embutido na produção de tudo o que você consome: dos alimentos no seu prato às roupas e aparelhos
            eletrônicos do seu dia a dia. Como essa água é gasta ao longo da cadeia produtiva, o desperdício acontece sem
            que a gente perceba.
          </p>
        </div>
      </section>

      {/* BASE DA ALIMENTAÇÃO */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h3 className="font-heading text-lg font-extrabold uppercase text-brand-blue sm:text-xl">
          Base da alimentação
        </h3>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
          <p>
            A base da nossa alimentação está diretamente ligada ao desperdício invisível porque{" "}
            <strong>a agropecuária consome cerca de 70% de toda a água doce do planeta</strong>.
          </p>
          <p>
            O tipo de alimento que escolhemos colocar no prato determina quanta água foi gasta no campo, na indústria e
            no transporte antes da refeição acontecer.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
          <p className="text-[15px] leading-relaxed">
            O desperdício de comida é a forma mais rápida e silenciosa de jogar água limpa no lixo: estima-se que 33% de
            todos os alimentos produzidos no mundo sejam descartados, o que equivale a desperdiçar cerca de{" "}
            <strong>250 trilhões de litros de água doce</strong> por ano.
          </p>
          <div className="w-full shrink-0 sm:max-w-xs">
            <PieChart
              question="Qual a base da sua alimentação principal?"
              responses={109}
              data={[
                { label: "Rica em carnes (frango, boi...)", value: 22.9, color: GOOGLE.blue },
                { label: "Equilibrada (grãos e carnes)", value: 76.1, color: GOOGLE.red },
                { label: "Vegetariana", value: 1, color: GOOGLE.orange },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FERRAMENTAS DE INTELIGÊNCIA ARTIFICIAL */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h3 className="font-heading text-lg font-extrabold uppercase text-brand-blue sm:text-xl">
            Ferramentas de Inteligência Artificial
          </h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
            <p>
              As ferramentas de inteligência artificial possuem uma pegada hídrica invisível significativa devido à
              infraestrutura física necessária para mantê-las funcionando.
            </p>
            <p>
              Toda vez que você envia uma pergunta ou gera um conteúdo com IA, processadores superpotentes entram em ação
              dentro de servidores de grande porte (data centers), gerando calor e exigindo recursos para o seu
              funcionamento.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="w-full shrink-0 sm:max-w-xs">
              <PieChart
                question="Você utiliza ferramentas de Inteligência Artificial (como o ChatGPT) para estudar? Se sim, quantas perguntas faz por dia?"
                responses={109}
                data={[
                  { label: "Não utilizo", value: 48.6, color: GOOGLE.blue },
                  { label: "1 a 10 perguntas", value: 38.5, color: GOOGLE.red },
                  { label: "Mais de 10 perguntas", value: 12.8, color: GOOGLE.orange },
                ]}
              />
            </div>
            <p className="text-[15px] leading-relaxed">
              Pesquisas de universidades norte-americanas indicam que uma troca de mensagens com um modelo de linguagem
              (cerca de 10 a 50 respostas) consome o equivalente a <strong>500 ml de água</strong> (uma garrafa
              plástica), o que representa em média de <strong>10 ml a 50 ml por prompt</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* BRASIL, O MAIOR EXPORTADOR DE ÁGUA DO MUNDO */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h2 className="font-heading text-xl font-extrabold uppercase leading-tight text-brand-blue sm:text-2xl">
          Brasil, o maior exportador de água do mundo
        </h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
          <p>
            O Brasil é um dos maiores exportadores globais de água virtual (água embutida na produção de mercadorias),
            figurando habitualmente entre os primeiros do ranking mundial.
          </p>
          <p>
            Esse fluxo brasileiro ocorre de forma invisível por meio de <strong>commodities agrícolas</strong> e{" "}
            <strong>pecuárias de alta intensidade hídrica</strong>.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
          <p className="text-[15px] leading-relaxed">
            O volume de água doce que o Brasil exporta de forma indireta gira{" "}
            <strong>entre 112 e 250 trilhões de litros por ano</strong> (o equivalente a 112 a 250 bilhões de m³), a
            depender de quais tipos de água (da chuva, de irrigação ou de diluição de efluentes) são contabilizados no
            estudo.
          </p>
          <div className="w-full shrink-0 sm:max-w-xs">
            <PieChart
              question='Você sabia que o Brasil é um dos maiores "exportadores" de água do mundo através de produtos como soja e carne?'
              responses={109}
              data={[
                { label: "Sim", value: 65.1, color: GOOGLE.blue },
                { label: "Não", value: 34.9, color: GOOGLE.red },
              ]}
            />
          </div>
        </div>
      </section>

      {/* RADIOGRAFIA DO DESPERDÍCIO DE ÁGUA NO BRASIL */}
      <section className="bg-section py-8">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-heading text-xl font-extrabold uppercase leading-tight text-brand-blue sm:text-2xl">
            Radiografia do desperdício de água no Brasil
          </h2>
          <p className="mt-3 text-center text-[15px] leading-relaxed">
            A radiografia da água no Brasil revela um país de abundância continental, mas marcado por grandes
            desigualdades regionais na distribuição dos recursos, alto consumo no setor produtivo e desafios críticos na
            rede de saneamento.
          </p>
          <p className="mt-3 text-center text-[15px] leading-relaxed">
            Os principais dados que desenham o panorama hídrico do país, segundo os relatórios mais recentes da Agência
            Nacional de Águas e Saneamento Básico (ANA), são os seguintes:
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="text-[15px] leading-relaxed">
              <h3 className="font-heading font-bold text-foreground">1. O Paradoxo da Disponibilidade</h3>
              <p className="mt-1">
                O Brasil abriga cerca de <strong>12%</strong> de toda a água doce de superfície do planeta. No entanto,
                a distribuição geográfica desse recurso é totalmente inversa à densidade populacional.
              </p>
            </div>
            <div className="text-[15px] leading-relaxed">
              <h3 className="font-heading font-bold text-foreground">2. Quem Mais Consome Água no Brasil</h3>
              <p className="mt-1">
                O Brasil retira aproximadamente 2.098 m³/s de água de seus rios e lençóis freáticos (cerca de 66,3
                trilhões de litros por ano). A divisão dessa captação é assim distribuída:
              </p>
              <ul className="mt-2 space-y-0.5">
                <li>
                  Irrigação (Agricultura) - <strong>50,3%</strong>
                </li>
                <li>
                  Abastecimento Urbano - <strong>22,3%</strong>
                </li>
                <li>
                  Indústria - <strong>9,9%</strong>
                </li>
                <li>
                  Pecuária (Uso Animal) - <strong>8,4%</strong>
                </li>
                <li>
                  Outros (Energia, Mineração, Rural) - <strong>9,1%</strong>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="/images/mat-radiografia-desperdicio.png"
            alt="Infográfico 'A radiografia do desperdício nacional de água': 39,53% da água tratada é perdida, 4.800 piscinas olímpicas desperdiçadas por dia e água suficiente para abastecer 77 milhões de brasileiros por um ano"
            className="mx-auto mt-6 w-full max-w-xl rounded-md border-4 border-white shadow-sm"
          />
        </div>
      </section>

      {/* COMO EVITAR DESPERDIÇAR A ÁGUA */}
      <section className="mx-auto max-w-3xl px-5 py-8">
        <h2 className="font-heading text-xl font-extrabold uppercase leading-tight text-brand-blue sm:text-2xl">
          Como evitar desperdiçar a água
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed">
          Para zerar ou reduzir o desperdício de água em todas as frentes abordadas — do ralo da sua pia até a pegada
          hídrica oculta —, a estratégia precisa cobrir o consumo direto (visível) e o consumo indireto (invisível).
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-[15px] leading-relaxed marker:text-brand-blue">
          <li>
            <strong>Gestão do Óleo de Cozinha:</strong> Armazene o óleo usado em garrafas PET e entregue em pontos de
            coleta para reciclagem.
          </li>
          <li>
            <strong>Otimização do Banho:</strong> Reduza a duração para cerca de 5 minutos e feche o registro ao se
            ensaboar ou aplicar xampu.
          </li>
          <li>
            <strong>Manutenção Rápida de Torneiras:</strong> Troque a borracha de vedação de torneiras ao menor sinal de
            gotejamento.
          </li>
          <li>
            <strong>Uso Consciente da Torneira:</strong> Feche a água enquanto escova os dentes ou ensaboa a louça na
            pia.
          </li>
          <li>
            <strong>Desperdício Zero no Prato:</strong> Planeje as compras do mercado com lista, aproveite cascas e
            talos em receitas e congele sobras antes que estraguem.
          </li>
          <li>
            <strong>Uso Consciente da IA e Tecnologia:</strong> Faça perguntas diretas e objetivas a ferramentas de IA
            para evitar prompts desnecessários ou regerações repetitivas.
          </li>
          <li>
            <strong>Moda Sustentável:</strong> Evite comprar roupas por impulso (fast fashion). Priorize peças duráveis,
            brechós ou o conserto de roupas usadas, reduzindo o impacto de milhares de litros de água embutidos na
            produção do algodão e no tingimento de tecidos.
          </li>
          <li>
            <strong>Economia de Energia Elétrica:</strong> Apague luzes e desligue aparelhos da tomada ao sair do
            ambiente. Como a maior parte da energia do Brasil vem de usinas hidrelétricas, economizar eletricidade reduz
            a pressão direta sobre os reservatórios dos rios.
          </li>
        </ul>
      </section>
    </main>
  )
}
