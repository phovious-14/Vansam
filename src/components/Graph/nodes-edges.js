const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
  {
    id: '1',
    data: { label: (
      <>
        Male name - babulal <br />
        DOB - 1-1-1950 <br />
        Wife - Lilaben <br />
        Generation - 1 <br />
      </>
    ), },
    position,
  },
  {
    id: '2',
    data: { label: (
      <>
        Male name - Prakash bhai <br />
        DOB - 10-9-1972 <br />
        Wife - Rita ben <br />
        Generation - 2 <br />
      </>
    ), },
    position,
  },
  {
    id: '3',
    data: { label: (
      <>
        Male name - Atul bhai <br />
        DOB - 10-4-1977 <br />
        Wife - Jagruti ben <br />
        Generation - 2 <br />
      </>
    ), },
    position,
  }
];

export const initialEdges = [
  { id: 'e12', source: '1', label:"son", target: '2' },
  { id: 'e13', source: '1', label:"son", target: '3'},
];
