export default function browse() {
    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Browse The Range</h2>
          <p className="text-center text-muted-foreground mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-blue-500 rounded-lg p-4">
              <img src="b1.png" alt="Dining" className="w-full h-auto rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-center">Dining</h3>
            </div>
            <div className="border border-blue-500 rounded-lg p-4">
              <img src="b2.png" alt="Living" className="w-full h-auto rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-center">Living</h3>
            </div>
            <div className="border border-blue-500 rounded-lg p-4">
              <img src="b3.png" alt="Bedroom" className="w-full h-auto rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-center">Bedroom</h3>
            </div>
          </div>
        </div>
    )
}