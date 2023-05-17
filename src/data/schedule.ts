type GamejamEvent = {
  startTime: string;
  description: string;
};

type Day = {
  id: number;
  date: string;
  name: string;
  events: GamejamEvent[];
};

export const schedule: Day[] = [
  {
    id: 1,
    name: 'Sexta',
    date: '02/06',
    events: [
      {
        startTime: '18:00',
        description: 'Abertura de portas e check-in'
      },
      {
        startTime: '18:30',
        description: 'Revelação do tema'
      },
      {
        startTime: '19:00',
        description: 'Jantar / Convívio'
      },
      {
        startTime: '20:00',
        description: 'Início do Desenvolvimento '
      }
    ]
  },
  {
    id: 2,
    name: 'Sábado',
    date: '03/06',
    events: [
      {
        startTime: '13:00',
        description: 'Almoço'
      },
      {
        startTime: '20:00',
        description: 'Jantar'
      }
    ]
  },
  {
    id: 3,
    name: 'Domingo',
    date: '04/06',
    events: [
      {
        startTime: '13:00',
        description: 'Almoço'
      },
      {
        startTime: '18:00',
        description: 'Submissão'
      },
      {
        startTime: '18:30',
        description: 'Apresentação aos júris'
      },
      {
        startTime: '20:00',
        description: 'Entrega de prémios e sessão de encerramento'
      }
    ]
  }
];
