// Defina as etapas da RCP
const rcpEtapas = [
    {
      titulo: "Reconhecimento e Acionamento",
      descricao: "Reconheça os sinais de parada cardiorrespiratória e acione o serviço médico de emergência.",
      acoes: ["Verificar pulso", "Verificar respiração", "Acionar emergência"]
    },
    {
      titulo: "RCP Imediata de Alta Qualidade",
      descricao: "Inicie a ressuscitação cardiopulmonar com compressões torácicas de alta qualidade.",
      acoes: ["Comprimir tórax 100-120 vezes por minuto", "Verificar respiração"]
    },
    {
      titulo: "Rápida Desfibrilação",
      descricao: "Utilize um desfibrilador externo automático (DEA) assim que disponível.",
      acoes: ["Conectar DEA", "Seguir instruções do DEA"]
    },
    {
      titulo: "Suporte Avançado de Vida e Cuidados Pós-PCR",
      descricao: "Forneça suporte avançado de vida e cuidados pós-PCR.",
      acoes: ["Ventilar paciente", "Administrar medicamentos"]
    }
  ];
  
  // Função para renderizar as etapas da RCP
  function renderizarRCP() {
    const container = document.getElementById("rcp-container");
    rcpEtapas.forEach((etapa, indice) => {
      const etapaHTML = `
        <h2>${etapa.titulo}</h2>
        <p>${etapa.descricao}</p>
        <ul>
          ${etapa.acoes.map(acao => `<li>${acao}</li>`).join("")}
        </ul>
      `;
      container.innerHTML += etapaHTML;
    });
  }
  
  // Tela de Início
  document.getElementById("btn-rcp").addEventListener("click", () => {
    document.getElementById("tela-de-inicio").style.display = "none";
    document.getElementById("tela-de-instrucoes").style.display = "block";
    document.getElementById("audio-instrucao-1").play();
  });
  
  // Tela de Instruções
  document.getElementById("btn-simular").addEventListener("click", () => {
    document.getElementById("tela-de-instrucoes").style.display = "none";
    document.getElementById("tela-de-simulacao").style.display = "block";
    document.getElementById("audio-instrucao-2").play();
  });
  
  // Tela de Simulação
  document.getElementById("btn-comprimir").addEventListener("click", () => {
    console.log("Comprimindo tórax...");
  });
  
  document.getElementById("btn-ventilar").addEventListener("click", () => {
    console.log("Ventilando paciente...");
  });
  
  // Renderizar as etapas da RCP
  renderizarRCP();