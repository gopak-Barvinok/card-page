import Card from "./Card"
import Welcome from "./CardContent/Welcome"
import AboutMe from "./CardContent/AboutMe"

export default function Body() {

    return (
        <div className='flex items-center justify-center h-screen bg-gradient-to-t'>
          <div className='mx-auto my-auto'>
            <div className="mt-36"/>
            <div className="pr-60">
              <Card cardGradient={'bg-gradient-to-r'}>
                  <Welcome/>
              </Card>
            </div>
            <div className="pl-60 mt-64">
              <Card cardGradient={'bg-gradient-to-l'}>
                <AboutMe/>
              </Card>
            </div>
            <div className="">
              <Card>
              </Card>
            </div>
          </div>
        </div>
    )
}