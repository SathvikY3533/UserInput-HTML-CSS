add = document.getElementById('formCreation');
search = new URLSearchParams(window.location.search);
qInput = search.get('qTitle');
ans1 = search.get('ans1');
ans2 = search.get('ans2');
ans3 = search.get('ans3');
ans4 = search.get('ans4');
//export const correct = search.get('correctAnswer');


add.innerHTML += "<br><br><form action='submitPage2.html' method='GET'> <section class='question'> <span>" + qInput + "</span> <br> <input type='radio' id='"+ans1+"' name='q2' value='"+ans1+"' required> <label for='"+ans1+"'>"+ans1+"</label> <br> <input type='radio' id='"+ans2+"' name='q2' value='"+ans2+"' required> <label for='"+ans2+"'>"+ans2+"</label> <br> <input type='radio' id='"+ans3+"' name='q2' value='"+ans3+"' required> <label for='"+ans3+"'>"+ans3+"</label> <br> <input type='radio' id='"+ans4+"' name='q2' value='"+ans4+"' required> <label for='"+ans4+"'>"+ans4+"</label> <br><br> </section> <section class='submit'> <button type='submit'>Submit</button> </section> </form>";

