type GamejamEvent = {
  startTime: string;
  endTime: string;
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
        startTime: '18:30',
        endTime: '19:00',
        description: 'Abertura de portas e check-in'
      },
      {
        startTime: '19:00',
        endTime: '19:30',
        description: 'Revelação do tema (+ info sobre submissões)'
      },
      {
        startTime: '19:30',
        endTime: '20:30',
        description: 'Jantar'
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
        endTime: '14:00',
        description: 'Almoço'
      },
      {
        startTime: '20:00',
        endTime: '21:00',
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
        endTime: '14:00',
        description: 'Almoço'
      },
      {
        startTime: '14:00',
        endTime: '17:30',
        description: 'Conclusão do desenvolvimento'
      },
      {
        startTime: '17:30',
        endTime: '17:30',
        description: 'Submissão'
      },
      {
        startTime: '18:00',
        endTime: '19:00',
        description: 'Apresentação aos júris'
      },
      {
        startTime: '19:30',
        endTime: '20:00',
        description: 'Entrega de prémios e sessão encerramento'
      }
    ]
  }
];
