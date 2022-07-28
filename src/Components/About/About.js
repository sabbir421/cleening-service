import React from 'react';
import './about.css'

const About = () => {
    return (
        <div>
            <h1 className='headding'>ABOUT US</h1>
            <p style={{marginLeft:"448px",height:"48px",width:"577px",fontSize: "16px"}}>consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue.</p>

            <section className="d-flex justify-content-center">
                <hr style={{
                    width: "154px",
                    backgroundColor: '#FF8A00',
                    height: '4px',
                    borderRadius: '10px'

                }} /></section>
           <article style={{marginLeft:"200px",height:"100px",width:"1074px"}}>
           <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos deserunt sunt necessitatibus enim corporis illum labore, nemo minus excepturi accusantium maxime aspernatur voluptatum officiis cumque voluptate commodi blanditiis consequatur similique.</p>
           </article>
            
                <button className='btn aboutButton'>READ MORE</button>
            
        </div>
        
    );
};

export default About;