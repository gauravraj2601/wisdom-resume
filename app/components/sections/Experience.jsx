
// components/sections/Experience.jsx
const Experience = () => {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm">2020 - Present | Acme Inc.</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Web Developer</h3>
            <p className="text-muted-foreground text-sm">2018 - 2020 | XYZ Corp.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  