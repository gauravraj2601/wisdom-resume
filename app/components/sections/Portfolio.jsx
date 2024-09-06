
const Portfolio = () => {
    return (
        <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-muted p-4 rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Project 1"
              width={400}
              height={300}
              className="rounded-lg mb-4"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <h3 className="text-lg font-semibold mb-2">Project 1</h3>
            <p className="text-muted-foreground">A web application built with React and Node.js.</p>
          </div>
          {/* Repeat for other portfolio entries */}
        </div>
      </section>
      
    );
  };
  
  export default Portfolio;
  