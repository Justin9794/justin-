import "./App.css";

function Profile() {
  return (
    <header className="post-profile">
      <img className="profile-image" src="/images/eden-avatar.png" alt="eden 프로필" />

      <strong className="profile-username">eden</strong>

      <button className="more-button" type="button" aria-label="더 보기">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
function Tech(props) {
  return <p>
            <button type="button" aria-label={props.name}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d= {props.route} />  
              </svg>
            </button>
  </p>;
}
/*<strong>eden</strong>
            <span>프론트엔드 찍먹 중 👅</span>*/

function Reply(props){
  return <div>
  <strong>{props.user}</strong>
            <span> {props.content}</span>
            
    </div>;
}
function App() {
  const re=[
    {user:"eden",content:"프론트엔드 찍먹 중 👅"},{user:"Justin9794",content:"지오메트리 대쉬 지금바로 다운로드"},{user:"Justin9794",content:"꺄 이든님 DM받아주세요"},{user:"eden",content:"차단합니다"}
  ]
  
  return (
    <main className="page">
      <article className="post">

        <Profile />

        <div className="post-image-area">
          <img className="post-image" src="/images/wow.png" alt="홍익대학교 마스코트" />
        </div>

        <div className="post-actions">
          <div className="left-actions">
            <Tech name="좋아요" route="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>
            
<Tech name="댓글" route="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z"/>
            
  
  
          <Tech name="공유" route="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2"/>

  
          </div>
          <Tech name="저장" route="M4 2h16v20l-8-6-8 6V2Z"/>
          
        </div>

        <section className="post-content">
          <p className="like-count">
            좋아요 <strong>44</strong>개
          </p>

          <div className="caption">
            {re.map((rep)=>(
              <Reply 
              user={rep.user} 
            content={rep.content}/>
            ))}
          </div>
          
        </section>
      </article>
    </main>
  );
}

export default App;
