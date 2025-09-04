import { Squares } from "@/components/ui/squares-background"

export function SquaresShowcase() {
  return (
    <div className="space-y-8 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Squares Background Showcase</h1>
        <p className="text-white/80">Different configurations and animations</p>
      </div>

      {/* Direction Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Right Direction</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="right"
              speed={1}
              squareSize={30}
              borderColor="#333" 
              hoverFillColor="#222"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Left Direction</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="left"
              speed={1}
              squareSize={30}
              borderColor="#333" 
              hoverFillColor="#222"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Up Direction</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="up"
              speed={1}
              squareSize={30}
              borderColor="#333" 
              hoverFillColor="#222"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Down Direction</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="down"
              speed={1}
              squareSize={30}
              borderColor="#333" 
              hoverFillColor="#222"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Diagonal Direction</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="diagonal"
              speed={1}
              squareSize={30}
              borderColor="#333" 
              hoverFillColor="#222"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Custom Colors</h3>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-[#060606]">
            <Squares 
              direction="diagonal"
              speed={0.5}
              squareSize={40}
              borderColor="#ff4940" 
              hoverFillColor="#ff494020"
            />
          </div>
        </div>
      </div>

      {/* Speed Variations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Speed Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Slow (0.2)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="right"
                speed={0.2}
                squareSize={35}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Medium (1.0)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="right"
                speed={1.0}
                squareSize={35}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Fast (2.0)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="right"
                speed={2.0}
                squareSize={35}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Size Variations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Square Size Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Small (20px)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="diagonal"
                speed={0.5}
                squareSize={20}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Medium (40px)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="diagonal"
                speed={0.5}
                squareSize={40}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Large (80px)</h3>
            <div className="relative h-[150px] rounded-lg overflow-hidden bg-[#060606]">
              <Squares 
                direction="diagonal"
                speed={0.5}
                squareSize={80}
                borderColor="#333" 
                hoverFillColor="#222"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
