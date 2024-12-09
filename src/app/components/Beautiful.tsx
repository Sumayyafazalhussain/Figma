function Beautiful() {
    return (
      <>
        <div className="bg-background p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-primary">50+ Beautiful rooms inspiration</h2>
            <p className="text-muted-foreground mt-2">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-lg">
              Explore More
            </button>
          </div>
  
          {/* Right Section */}
          <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
            {/* Box 1 */}
            <div className="bg-card rounded-lg overflow-hidden">
              <img
                src="b7.png"
                alt="Room 1"
                className="w-full h-full object-cover"
              />
              <div className="p-4">
           
                <p className="text-muted-foreground">Inner Peace</p>
              </div>
            </div>
  
            {/* Box 2 */}
            <div className="bg-card rounded-lg overflow-hidden">
              <img
                src="b5.jpg"
                alt="Room 2"
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                
             
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Beautiful;