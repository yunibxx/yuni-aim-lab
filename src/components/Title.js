import './Title.css';

function Title({ text = "Yuni's Aim Lab" }) {
  return <h1 className="title">{text}</h1>;
}

export { Title };
