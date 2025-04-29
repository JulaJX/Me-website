// src/pages/portfolio/ProjectList.jsx
import React from 'react'
import { Link } from 'react-router-dom'

// 1) Statyczne importy wszystkich grafik
import maze        from '../../assets/maze.png'
import quiz        from '../../assets/quiz.png'
import car         from '../../assets/car.png'

// 2) Mapa: nazwa pliku → URL wygenerowany przez bundler
const imageMap = {
  'maze.png': maze,
  'quiz.png': quiz,
  'car.png':  car,
}

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(p => {
        const fileName = p.path.trim().split('/').pop()
        const src = imageMap[fileName]

        return (
          <Link to={p.id} key={p.id}>
            <article className="max-w-[300px] bg-white rounded-lg shadow-lg hover:-translate-y-3 transition-transform duration-200 cursor-pointer">
              <div className="h-[160px] overflow-hidden rounded-t-lg">
                <img
                  src={src}
                  alt={p.name}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 bg-mbg hover:text-secondary ease-in-out duration-300">
                <h5 className="text-xl font-bold mb-2">{p.name}</h5>
                <p className="text-base text-gray-600 mb-4">{p.desc2}</p>
                <span className="inline-flex items-center text-sm hover:text-secondary ease-in-out duration-300">
                  Click for more details →
                </span>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
