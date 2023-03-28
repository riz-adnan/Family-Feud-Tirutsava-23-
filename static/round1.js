let check=0;
        
        function q(id){
            a=document.getElementById('pop');
            if(check==0)
            {
            a.style.display="block";
            if(id=='qq1'){
            document.getElementById('qest').innerHTML="Question 1?";}
            else if(id=='qq2')
            {
              document.getElementById('qest').innerHTML="Question 2?";
            }
            else if(id=='qq3')
            {
              document.getElementById('qest').innerHTML="Question 3?";
            }
            else if(id=='qq4')
            {
              document.getElementById('qest').innerHTML="Question 4?";
            }
            else if(id=='qq5')
            {
              document.getElementById('qest').innerHTML="Question 5?";
            }
            else if(id=='qq6')
            {
              document.getElementById('qest').innerHTML="Question 6?";
            }
            else if(id=='qq7')
            {
              document.getElementById('qest').innerHTML="Question 7?";
            }
            else if(id=='qq8')
            {
              document.getElementById('qest').innerHTML="Question 8?";
            }
            else if(id=='qq9')
            {
              document.getElementById('qest').innerHTML="Question 9?";
            }
            else if(id=='qq10')
            {
              document.getElementById('qest').innerHTML="Question 10?";
            }
            else if(id=='qq11')
            {
              document.getElementById('qest').innerHTML="Question 11?";
            }
            else if(id=='qq12')
            {
              document.getElementById('qest').innerHTML="Question 12?";
            }
            else if(id=='qq13')
            {
              document.getElementById('qest').innerHTML="Question 13?";
            }else if(id=='qq14')
            {
              document.getElementById('qest').innerHTML="Question 14?";
            }
            else if(id=='qq15')
            {
              document.getElementById('qest').innerHTML="Question 15?";
            }
            else if(id=='qq16')
            {
              document.getElementById('qest').innerHTML="Question 16?";
            }
            else 
            {
              document.getElementById('qest').innerHTML="?";
            }
            check=1;}
            else
            {
            a.style.display="none";
            check=0;
            }
        }
        let score1=0;
        let score2=0;
        let score3=0;
        let score4=0;
        let score5=0;
        
        function plusupdate(team)
        {
          if(team=='t1')
          {
            score1=score1+100;
            document.getElementById('score1').innerHTML=score1;
          }
          if(team=='t2')
          {
            score2=score2+100;
            document.getElementById('score2').innerHTML=score2;
          }
          if(team=='t3')
          {
            score3=score3+100;
            document.getElementById('score3').innerHTML=score3;
          }
          if(team=='t4')
          {
            score4=score4+100;
            document.getElementById('score4').innerHTML=score4;
          }
          if(team=='t5')
          {
            score5=score5+100;
            document.getElementById('score5').innerHTML=score5;
          }
          if(team=='t6')
          {
            score6=score6+100;
            document.getElementById('score6').innerHTML=score6;
          }
          
        }
        function minusupdate(team)
        {
          if(team=='t1')
          {
            score1=score1-100;
          document.getElementById('score1').innerHTML=score1;

          }
          if(team=='t2')
          {
            score2=score2-100;
            document.getElementById('score2').innerHTML=score2;
          }
          if(team=='t3')
          {
            score3=score3-100;
            document.getElementById('score3').innerHTML=score3;
          }
          if(team=='t4')
          {
            score4=score4-100;
            document.getElementById('score4').innerHTML=score4;
          }
          if(team=='t5')
          {
            score5=score5-100;
            document.getElementById('score5').innerHTML=score5;
          }
          if(team=='t6')
          {
            score6=score6-100;
            document.getElementById('score6').innerHTML=score6;
          }
        }
        