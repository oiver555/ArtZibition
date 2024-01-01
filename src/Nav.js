const Nav = (props) => {

    return (
        <div style={{ color: "white" }}>
            <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: .2, textAlign: "center", color: "orange", fontSize: 16, textAlignLast: "left" }}><span style={{ fontSize: 20 }}>A</span>rt<span style={{ fontSize: 20 }}>Z</span>ibition<span style={{ display: "block", position: "absolute", left: 18, fontSize: 14 }}>Expereince the Art</span></div>

                <div style={{ flex: .7, textAlign: "center", }}>
                    <input inputMode="search" color="orange" placeholder="Search by Artist" style={{ width: "50%", padding: 5, background: "transparent", color: "orange", border: "1px solid orange" }} />
                </div>
                <div style={{ flex: .3, textAlign: "center", justifyContent: "space-around", display: "flex", alignItems: "center" }}>
                    <div style={{ width: 90, borderRadius: 15, color: "orange" }}>Buy</div>
                    <div style={{ border: "1px orange solid", width: 90, borderRadius: 15, color: "orange" }}>Login</div>
                    <div style={{ border: "1px orange solid", background: "orange", color: "black", width: 90, borderRadius: 15 }}>Sign Up</div>
                </div>
            </div>
            <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: .7, textAlign: "center", }}>1</div>
                <div style={{ flex: .15, textAlign: "center", color: "orange" }}>World Wide Delivery</div>
                <div style={{ flex: .15, textAlign: "center", color: "orange" }}>999-999-9999</div>
            </div>
            <div style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start", background: "orange" }}>
                <div style={{ flex: .08, color: "black", textAlign: "center", fontWeight: 500 }}>Artists</div>
                <div style={{ flex: .08, color: "black", textAlign: "center", fontWeight: 500 }}>Artworks</div>
                <div style={{ flex: .08, color: "black", textAlign: "center", fontWeight: 500 }}>Exhibitions</div>
            </div>

        </div>
    )
}

export default Nav