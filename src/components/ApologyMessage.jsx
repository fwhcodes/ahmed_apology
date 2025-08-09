import './ApologyMessage.css'

const ApologyMessage = () => {
  return (
    <div className="apology-container">
      <div className="cat-silhouette"></div>
      <div className="message-card">
        <div className="message-header">
          <h2>My Dearest Dark Knight Ahmed Ayyan</h2>
          <div className="heart-divider">💜</div>
        </div>
        
        <div className="message-content">
          <p className="main-apology">
            From the rooftops of Gotham, where the Court of Owls watches, I write to you with a heavy heart...
          </p>
          
          <p>
            I've been prowling through the shadows, caught up in my own world of heists and schemes, 
            and I realize I've neglected the most precious treasure of all - <strong>you</strong>, my little baby Ahmed Ayyan.
            Even the ancient Court of Owls couldn't have orchestrated a greater mistake than my absence.
          </p>
          
          <p>
            Like a cat who's been away too long hunting in Gotham's darkest alleys, I've forgotten that 
            the most important mission isn't stealing diamonds or escaping Batman - it's being present 
            for those who matter most. The owls may rule the night, but you rule my heart.
          </p>
          
          <div className="promise-section">
            <h3>My Sacred Vow to You</h3>
            <ul className="promise-list">
              <li>🐾 I will pay more attention to your needs, my little robin</li>
              <li>💎 You are more valuable than any jewel the Court could hoard</li>
              <li>🌙 I'll spend more moonlit nights with you, away from Gotham's chaos</li>
              <li>❤️ My love for you outshines even the Bat-Signal piercing the night</li>
              <li>🦉 Like the Court's eternal vigil, my devotion to you will never waver</li>
            </ul>
          </div>
          
          <p className="closing">
            Forgive your Catwoman, little one. Even the most independent cats need their family. 
            The Court of Owls may control Gotham from the shadows, but you control my entire world.
          </p>
          
          <div className="court-quote">
            <em>"Beware the Court of Owls, that watches all the time,<br/>
            But greater still is love that conquers through all time..."</em>
          </div>
          
          <div className="signature">
            <p>With all my love and whiskers,</p>
            <p className="signature-name">🐱 Fatima Waseem (Your Selina Kyle) 🖤</p>
            <p className="dedication">Forever your devoted Catwoman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApologyMessage
