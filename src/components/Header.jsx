import ladyImg from '../assets/women.png';

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-1 py-8 mb-5 rounded-md"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(4, 112, 184, 0.8) 0%, rgba(79, 175, 215, 0.8) 100%), url(${ladyImg})`,
        backgroundSize: 'auto 100%',  
        backgroundPosition: 'left',  
        backgroundRepeat: 'no-repeat',  
        height: '150px', 
      }}
    >
      <div className="text-xl text-white font-semibold bg-opacity-50 p-4 rounded-md">
        Welcome to SATify, <br />Your Ultimate SAT Preparation Companion!
      </div>
    </header>
  );
};

export default Header;
