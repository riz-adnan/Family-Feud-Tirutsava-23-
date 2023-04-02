let check=0;
        
        function q(id){
            a=document.getElementById('pop');
            if(check==0)
            {
            a.style.display="block";
            if(id=='qq1'){
            document.getElementById('qest').innerHTML="Name a number that is long lasting?";}
            else if(id=='qq2')
            {
              document.getElementById('qest').innerHTML="After you take a selfie, who might you send it to?";
            }
            else if(id=='qq3')
            {
              document.getElementById('qest').innerHTML="What is the first thing making noise in the morning, besides an alarm!";
            }
            else if(id=='qq4')
            {
              document.getElementById('qest').innerHTML="Name something parents tell their kids not to waste!";
            }
            else if(id=='qq5')
            {
              document.getElementById('qest').innerHTML="Besides a clock, watch or your telephone, what in your home displays the time?";
            }
            else if(id=='qq6')
            {
              document.getElementById('qest').innerHTML="What might a boyfriend rather admit to his buddies than to his girlfiriend?";
            }
            else if(id=='qq7')
            {
              document.getElementById('qest').innerHTML="Name something you would wear, even if it had a hole in it!";
            }
            else if(id=='qq8')
            {
              document.getElementById('qest').innerHTML="Tell me something a man might do to get a woman 'in the mood'.";
            }
            else if(id=='qq9')
            {
              document.getElementById('qest').innerHTML="What thing women exaggerates about herself?";
            }
            else if(id=='qq10')
            {
              document.getElementById('qest').innerHTML="Besides a pillow, name something you might rest your head on to go sleep?";
            }
            else if(id=='qq11')
            {
              document.getElementById('qest').innerHTML="Name Something You Love to Smell in the Morning.";
            }
            else if(id=='qq12')
            {
              document.getElementById('qest').innerHTML="Name a movie you cant watch with your parent.";
            }
            else if(id=='qq13')
            {
              document.getElementById('qest').innerHTML="Name a language that makes anything sound sexy.";
            }else if(id=='qq14')
            {
              document.getElementById('qest').innerHTML="What is the most cringe thing between couples?";
            }
            else if(id=='qq15')
            {
              document.getElementById('qest').innerHTML="Name something that is the hardest to do, when it is your first time trying it and you are just learning.";
            }
            else if(id=='qq16')
            {
              document.getElementById('qest').innerHTML="Name something your spouse might get mad at you for doing too much.";
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
        