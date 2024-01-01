import './App.css';
import Hero from './Hero.js';
import Nav from './Nav.js';
import { Canvas } from 'react-three-fiber';
import painting_00 from './painting_00.jpeg'
import painting_01 from './painting_01.jpeg'
import painting_02 from './painting_02.jpeg'
import painting_03 from './painting_03.jpeg'
import painting_04 from './painting_04.jpeg'
import painting_05 from './painting_05.jpeg'
import painting_06 from './painting_06.jpeg'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import SVGChat from './SVG_Chat.js';


function App() {

  

  return (
    <div style={{ background: "rgb(20,20,20)", color: "white", height: '100vh', width: "100%", overflow: 'auto', fontFamily: "Inter" }} >
      <Nav />
      <Canvas
         camera={{fov: 35,}}
        style={{ height: 500 }}  >
        <Hero />
      </Canvas>
      <hr></hr>
      <div style={{ padding: '0px 40px', }}>
        <h2>Featured Artist</h2>
        <SimpleBar forceVisible autoHide={false} >
          <div style={{ display: "flex", width: "100%", paddingRight: 10, height: 400, justifyContent: "flex-start" }}>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>

      </div>
      <div style={{ padding: '0px 40px', }}>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <h2 style={{ marginBottom: 0 }}>Curators Pick: Emerging Artist</h2>
            <div style={{ color: "rgb(100,100,100)", fontSize: 18 }}>The Best Works by Rising Talents on Artsy</div>
          </div>

          <div style={{ borderBottom: "1px solid white", paddingBottom: 1 }}>View All Works</div>
        </div>

        <SimpleBar forceVisible autoHide={false} >
          <div style={{ display: "flex", width: "100%", paddingRight: 10, height: 400, justifyContent: "flex-start" }}>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_01} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_02} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_03} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_04} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_05} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <div>Obert Jongwe</div>
                <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                  <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>

      </div>

      <div style={{ padding: '0px 40px', }}>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <h2 style={{ marginBottom: 0, fontFamily: "Inter", fontWeight: 500 }}>Editorial</h2>
          </div>

          <div style={{ borderBottom: "1px solid white", paddingBottom: 1 }}>View All Works</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
          <div style={{ flex: .4 }}>
            <div>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
              <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap" }}>Art the Best Investment</div>
              <div style={{ fontFamily: "inter", fontSize: 16 }}>By Obert Jongwe</div>
            </div>
          </div>
          <div style={{ flex: .59, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end", }}>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column", }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>Abstract Art, the New Norm</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>5 Artists on our Radar this December</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>5 Artists on our Radar this December</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>Abstract Art, the New Norm</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>5 Artists on our Radar this December</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
            <div style={{ flexBasis: "31%", }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: '90%', height: '100%', objectFit: 'cover', flex: .9 }} alt='painting_00' src={painting_00} />
                <div style={{ fontFamily: "inter", fontSize: 25, whiteSpace: "wrap", maxWidth: 250 }}>Abstract Art, the New Norm</div>
                <div style={{ fontFamily: "inter", fontSize: 16 }}>Br Obert Jongwe</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr></hr>
      <div style={{ padding: '0px 40px', }}>
        <h2>Upcoming Exhibitions</h2>

        <div style={{ display: "flex", width: "100%", paddingRight: 10, height: 400, justifyContent: "space-around" }}>
          <div style={{ marginLeft: 10, position: "relative", display: "flex", flexDirection: "column" }}>
            <img style={{ width: 200, height: "auto" }} alt='painting_06' src={painting_06} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              <div>Untitled Art, Miama Beach 2023</div>
              <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
            <img style={{ width: 200, height: 'auto' }} alt='painting_00' src={painting_00} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              <div>Picture Montreal 2023</div>
              <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, marginLeft: 10, flexGrow: 0, maxWidth: 250, height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
            <img style={{ width: 200, height: 'auto' }} alt='painting_00' src={painting_00} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              <div>JONGWE 2023</div>
              <div style={{ display: 'flex', padding: '0 5px', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 300, color: "rgb(150,150,150)" }}>African B, 1975</div>
                <div style={{ background: "transparent", color: "white", border: "solid 1px white", borderRadius: 20, padding: '2px 15px' }}>Follow</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "column", padding: '0px 0px', height: 200, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>About Us</h4>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Resource</h4>
            <div>Editorial</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Support</h4>
            <div>Talk to a Specialist</div>
            <div>Visit our Help Center</div>
            <div>Buying on Artzibition</div>
          </div>
          <div style={{ width: 70, height: 70, alignSelf: "center" }}>
            <SVGChat />
          </div>
        </div>

        <div style={{ background: "black", height: 25, alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <div style={{ fontSize: 12 }}>2023 ArtZibition</div>
          <div style={{ fontSize: 12 }}>Terms of Use</div>
          <div style={{ fontSize: 12 }}>Privacy Policy</div>
          <div style={{ fontSize: 12 }}>Conditions of Sale</div>
          <div style={{ fontSize: 12 }}>Buyer Gurantee</div>
          <div style={{ fontSize: 12 }}>Do not Sell my Information</div>
          <div></div>

        </div>
      </div>



    </div>
  );
}

export default App;
