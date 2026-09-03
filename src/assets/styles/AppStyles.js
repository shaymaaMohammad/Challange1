import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 25px;
  background-color: #141414; 
  color: #fff;
  padding: 20px;
  user-select: none;
  box-sizing: border-box;
  width: 100%;


  /* main-title */
  .main-title {
    font-family:  sans-serif;
    letter-spacing: 2px;
    color: #00ffcc;
    margin: 0;
    font-size: 24px;
    text-align: center;
  }

 

  /* studio-stage container */
  .studio-stage {
     display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
/************************************************************************************ */
  /* responsive studio-stage */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 45px;
  }
}
`;

export default AppContainer;

