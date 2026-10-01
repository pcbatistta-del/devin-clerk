export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Lukson",
  description:
    "Um agente capaz de atender toda a rotina de um departamento jurídico: monitoramos processos e executamos workflows repetitivos com humano no loop.",
  emoji: "⚖️",
  accent: "#1e40af",
  upcomingFeatures: [
    {
      title: "Monitoramento de processos",
      description:
        "Cadastrar processos pelo nº CNJ e acompanhar os andamentos automaticamente.",
    },
    {
      title: "Alertas de prazos",
      description: "Receber avisos de prazos processuais antes do vencimento.",
    },
    {
      title: "Fila de aprovação",
      description: "Revisar e aprovar cada ação do agente antes de ser executada.",
    },
    {
      title: "Workflows repetitivos",
      description:
        "Usar modelos de fluxo prontos, como notificações e protocolos.",
    },
    {
      title: "Geração de minutas",
      description:
        "Criar rascunhos de peças a partir dos modelos do departamento.",
    },
    {
      title: "Trilha de auditoria",
      description: "Consultar o histórico de quem aprovou o quê, e quando.",
    },
  ] satisfies Feature[],
};
