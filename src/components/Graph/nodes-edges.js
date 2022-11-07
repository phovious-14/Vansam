const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
  {
    id: '1',
    data: { label: (
      <>
        Babulal
      </>
    ), },
    position,
  },
  {
    id: '2',
    data: { label: 'Lila ben' },
    position
  },
  {
    id: '3',
    data: { label: 'Prakas bhai' },
    position,
  },
  {
    id: '4',
    data: { label: 'Rita ben' },
    position,
  },
  {
    id: '5',
    data: { label: 'Atul bhai' },
    position,
  },
  {
    id: '6',
    data: { label: 'jagruti ben' },
    position
  }
];

export const initialEdges = [
  { id: 'e12', source: '1', label:"wife", target: '2' },
  { id: 'e34', source: '3', label:"wife", target: '4' },
  { id: 'e13', source: '1', target: '3', animated: true },
  { id: 'e23', source: '2', target: '3', animated: true },
  { id: 'e15', source: '1', target: '5', animated: true },
  { id: 'e25', source: '2', target: '5', animated: true },
  { id: 'e56', source: '5', label:"wife", target: '6' },
];
