
import { useState ,useEffect  } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Body() {
  
    interface Movies {
        id: number;
        title: string;
        poster_path: string;
        overview :string;
        release_date: string;
        vote_average:number;      }


      const [movies, setMovies] = useState<Movies[]>([]);

      useEffect(() => {
         
          const apiKey = 'ae6f657b67b8c0970d89d18ee18d1de7'; 
          axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
            .then((response) => {
              const movieResults = response.data.results.slice(0, 10);
              if (movieResults.vote_average) {
                movieResults.vote_average = movieResults.vote_average * 10
              }
              setMovies(movieResults);
              console.log(movieResults)
            })
            .catch((error) => {
              console.error('Error fetching movies:', error);
            });
        }, []);

        var navigate = useNavigate()
        const playMovie =(id :number) =>{
      navigate ('/Details', {state:{id:id}})
        }





    return (
     <div className='flex-col justify-around items-center p-12'> 
     <div className=' lg:flex lg:justify-between lg:items-center  mt-12 '>
       <h1 className='text-[36px] text-black'> Featured Movie  </h1> 
       <div className='flex'>
       <h1 className='text-[18px] pt-[2px]' style={{ color: '#BE123C' }}>See more</h1> 
       <img src='/images/Chevron right.png' alt='logo' className='w-[36px] h-[36px]' />
       </div></div>
       <div className=' lg:grid lg:grid-cols-4 gap-x-8 grid grid-cols-1 gap-y-[100px]   mt-8' >
       {movies.map((movie) => (
        <div className='relative'>
    <div  className='w-[250px] cursor-pointer' data-testid="movie-card"  key={movie.id} onClick={()=>playMovie(movie.id)}>
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  className='w-[250px] h-[370px]' data-testid="movie-poster"  /> 
<p className='text-[14px] text-gray-500  pt-2 ' data-testid="movie-release-date" >{movie.release_date}</p>
<p className='text-[18px] text-black pt-4 font-bold' data-testid=" movie-title">{movie.title}</p>
<div className='flex pt-4 justify-between'>
  
<div className='flex'><img src='/images/imdb.svg' alt='logo'  /> <p className='pl-2 text-18 text-black'>{movie.vote_average}/10</p></div>
<div className='flex'><img src='/images/tomato.svg' alt='logo'  /> <p className='pl-2 text-18 text-black'>87%</p></div>
<img src='/images/Favorite.svg' alt='logo' className='absolute top-5 right-[25%]' />
</div>

</div>

 </div>
       ))}
       </div>
     </div>
    )
  }
  
  export default Body
  