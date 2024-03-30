const Skills = () => {
  const skills = [
    {
      name: "C++",
      icon: (
        <img
          className='w-5'
          src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png'
        />
      ),
    },
    {
      name: "Java",
      icon: (
        <img
          className='w-5'
          src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png'
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          className='w-5'
          src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          className='w-5'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <img
          className='w-5'
          src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png'
        />
      ),
    },
    {
      name: "C",
      icon: (
        <img
          className='w-5'
          src='https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png'
        />
      ),
    },
    {
      name: "React JS",
      icon: (
        <img
          className='w-5'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        />
      ),
    },
    {
      name: "Node JS",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png'
        />
      ),
    },
    {
      name: "Express JS",
      icon: (
        <img
          className='w-5'
          src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png'
        />
      ),
    },
    {
      name: "Next JS",
      icon: (
        <img
          className='w-5'
          src='data:image/png;base64,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'
        />
      ),
    },
    {
      name: "Mongo DB",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png'
        />
      ),
    },
    {
      name: "Redux",
      icon: (
        <img
          className='w-5'
          src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png'
        />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <img
          className='w-5'
          src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png'
        />
      ),
    },
    {
      name: "Docker",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/docker-icon-icon-2048x1479-cres2he9.png'
        />
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <img
          className='w-5'
          src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png'
        />
      ),
    },
    {
      name: "Material UI",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png'
        />
      ),
    },
    {
      name: "shadcn/ui",
      icon: (
        <img
          className='w-5'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAZlBMVEUAAAD////T09OFhYVPT0/39/dbW1uNjY24uLg7OztpaWkGBga7u7vk5OQ4ODjt7e3e3t5wcHCdnZ2mpqbn5+caGhrLy8swMDAODg5CQkLy8vKTk5MqKip0dHTR0dFFRUUeHh6AgIA+ecFdAAADZElEQVR4nO3d23KiUBCF4aBowKgYz9HEMe//kpPDGOl9kylZ1m66/u8eqrtg7waWmXl4AAAAAAAAAAAAAAAAAAAAAKBXly+5S7inshosBtu33GXczaQpPh3ecxdyJ+Wi+NaMc5dyF/WsuFjlruUeysFPf0W1yV2N3rzVXzE95y5H7nnU6q9Y5i5Hbtxur2gmuetRe2tMg8Pc9aiNbX/hbtBn0168GTE3+8so3PVrz78Pj0+5CxKrbX/h9pdyFru/yaLd3iHc/Tmx8+Exdz1q47W9P6Ndv2T+xVt/dv6Fuz/L5Pks2v35YudfuOezcmGvX+561F5MfwHXn7k/D8N97oLEkvle5q5HzX5/ibf+7PeX0Src/Wmfz47RPoFOgn9fSuZfuP5q8347OuauRy35/rKKtv7mtr9wz9d2/h3Czfdk/oXbX5L84THafCd/6Dfyh34jf+g38od+I3/oN/KHfiN/6Dfyh34jf+g38of/UM/VZcko8ofhrGlmTp/sBPnDfvt97FZenIAgf9hML4fX8vI6U+QPy5/Dp/L6ulLkD8fr8Wt5gR0J8ofL+nPZoCB/eJ22T3GSl9iJIH/Ymf4KX38iIsgfnipzikZeYxeC/OHpZE4x28mL7ECQP7za63f6Iy+yA0H+kKy/raspr8gfluYUi7O4xE4U+YPtb+vqJxiC/GGX9Ofq/hTkD3a+F5Wr/VOQPyTzr3L1CUCQPyTzr3L1CVyQP+zs9du6+vcsBPlDsv4GrvYXQf6wt/2NXuVFdqDIH7bmFANX/Snyh6Ppz9f8E+QPGzvfK1f7iyB/SNafr/kgyB/2dv35mu+C/CGZD1tXz2eC/CF5v/W1vwjyh2T9LVy9Hwnzh8v1O6tr7EKaP3w5ubo/tfnDp5mr70vi/OFD42r/VOcP3n4iJM8fnP2Jjz5/8NUf+cOvyB8yIn/4HflDPtHzhzJ4/vBgN79w+UOywYTLH+wbbrz84cFewXD5w5frC064/OHb8+Fy/W452nP+cPH+NSeam+a75/zharyqpstbfjzmOn8wNudbjnKdPyh4zh8Uhnb9+Xo+UzDvIF73lw7q9kO6r/xBY95q0Ff+oHK9RX3lDzI/m4yv/EHo35jwlT9I1dP1+hTz/3EBAAAAAAAAAAAAAAAAAAAAAADu/AVeZimy0HkZOwAAAABJRU5ErkJggg=='
        />
      ),
    },
    {
      name: "Heroku",
      icon: (
        <img
          className='w-5'
          src='https://static-00.iconduck.com/assets.00/heroku-icon-icon-1843x2048-hklv6w4m.png'
        />
      ),
    },
    {
      name: "Netlify",
      icon: (
        <img
          className='w-5'
          src='https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png'
        />
      ),
    },
  ]

  return (
    <div className='mt-32'>
      <p className='text-4xl'>Skills</p>
      <div className='flex flex-wrap mt-4'>
        {skills.map((s) => (
          <span className='w-100 mb-3 py-2 px-4 bg-gray-200 rounded-3xl mr-2 flex justify-between items-baseline text-2xl hover:scale-105 duration-300 cursor-pointer'>
            <span>{s.icon}</span>
            <span className='ml-1'>{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
