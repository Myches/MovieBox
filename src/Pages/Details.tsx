import { useState ,useEffect  } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';




function Details() {
  

  interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    runtime:string;
    backdrop_path:string;
    genres:string;
  }

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null); 
  const {id} = useParams()



  useEffect(() => {
         
    const apiKey = 'ae6f657b67b8c0970d89d18ee18d1de7'; 
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        const movieResult = response.data; 
          if (movieResult.release_date) {
            const releaseDateUTC = new Date(movieResult.release_date).toUTCString();
            movieResult.release_date = releaseDateUTC;
          }
        setMovieDetails(movieResult);
        console.log(movieResult)
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [id]);



  

      
    return (
    <div className="flex">

   
     <div className="w-[20vw] h-[100vh] flex flex-col items-center border rounded-2xl "> 

<div className="flex pt-8"><img src='/images/tv.png' alt='logo' />
<h1 className='text-[24px] text-black pl-2 font-medium leading-tight pt-2'>MovieBox</h1>
</div>

<div className="mt-12 flex-col space-y-[25px]">
   <div className="flex"><img src='/images/Home.svg' alt='logo' /> <p className="text-[18px] text-black pl-4 font-medium leading-tight ">Home</p> </div>
   <div className="flex"><img src='/images/Movie Projector.svg' alt='logo' /> <p className="text-[18px] text-black pl-4 font-medium leading-tight ">Movies</p> </div>
   <div className="flex" ><img src='/images/TV Show.svg' alt='logo' /> <p className="text-[18px] text-black pl-4 font-medium leading-tight ">TV Series</p> </div>
   <div className="flex"><img src='/images/Calendar.svg' alt='logo' /> <p className="text-[18px] text-black pl-4 font-medium leading-tight ">Upcoming</p> </div>
</div>

    <div className="w-[80%] h-[200px] mx-auto border border-red-300 rounded-2xl mt-12">
        <h1 className="w-[80%] mx-auto font-bold text-black  pt-4">Play movie quizzes and earn free tickets</h1>
        <p className="w-[80%] mx-auto pt-2">50k people are playing now</p>

    <button className="text-red-500 bg-red-300 w-[80%] m-4 font-bold border rounded-2xl p-2 mt-2">Start Playing</button>
        </div>  

      <button className="flex mt-8">  <img src='/images/Logout.svg' alt='logo'  /><p className="text-gray-400 text-[18px] pt-[2px]">Log Out</p></button>
     </div>


     <div className="w-[100vw] h-[100vh]">
     <div>
     {movieDetails && (
            <div className='p-8'>
              <div className='relative'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                className="w-[100%] h-[449px] border rounded-2xl object-cover "
                alt={`Movie Poster for ${movieDetails.title}`}
              />
             <div className='absolute top-[40%] left-[40%]'> <img src='/images/Play.png' alt='logo' className=' p-4 bg-gray-400 border rounded-full border-none ' />
              <p className='text-white text-[22px] '>Watch Trailer</p></div>
           </div>
              
              

             <div className='lg:text-[20px] text-[16px] lg:flex-row lg:justify-around lg:items-center flex flex-col gap-y-2 p-4 font-bold lg:w-[70%] w-[100%]'> 
             <h2  data-testid="movie-title">{movieDetails.title}</h2><p className='text-[25px] '>.</p>
             <p data-testid="movie-release-date">{movieDetails.release_date}</p><p className='text-[25px] '>.</p>
             <p data-testid="movie-runtime">{movieDetails.runtime}</p>
             </div>

             <div className='lg:flex lg:flex-row flex flex-col'>
             <div className='mt-4  lg:w-[60%] w-[100%] flex-col justify-around items-center'>
             <p data-testid="movie-overview" >{movieDetails.overview}</p>
             <button className='mt-4 bg-red-700 p-2 text-white border rounded-lg '>Top Rated Movie #65</button>
              </div>

              
            <div className='lg:w-[40%] flex flex-col lg:px-[100px] lg:mt-0 mt-8'>
           <div> <button className='mt-4 bg-red-700 p-2 px-8 text-white border rounded-lg flex '>
            <img src='/images/Two Tickets.svg' alt='logo' className='' /> See Showtimes</button></div>
            <div> <button className='mt-4 bg-gray-200 p-2 text-black border-red-700 border rounded-lg flex '>
            <img src='/images/List.svg' alt='logo' className='pr-2' />
            Watch More Options</button>
           <div className='relative mt-4 w-[250px]'>
            <img src='/images/Rectangle 37.png' alt='logo' className='' />
            <p className='absolute bottom-0 left-0 text-white bg-blur  flex'>
            <img src='/images/List-white.png' alt='logo' className='' />
              The Best Show In September</p>
            </div>
            </div>
           
              </div>
              </div>
            </div>
          )}
     </div>
     </div>
     </div>
    )
  }
  
  export default Details
  