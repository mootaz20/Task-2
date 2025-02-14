import './FeaturedText.css'

const FeaturedText = () => {
  setTimeout(() => {
    var accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function () {
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      };
    }
  }, 0);
  return (
    <div className='featuredText'>
      <h3><strong>|</strong> Featured</h3>
      <div className='header'>
        <h1>Best </h1>
        <h1>Appartment &</h1>
        <h1>Sea view </h1>
      </div>
      <div className='accordions'>
        <button className="accordion border">
           Best useful Links?
        </button> 
        <div className='accordion-content'>
        <p>Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="">best free CSS templates</a> in the world. Please tell your friends about it.</p>  
        </div> 
        <button className="accordion border">
           How does this work ?
        </button> 
        <div className='accordion-content'>
        <p>Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="">best free CSS templates</a> in the world. Please tell your friends about it.</p>  
        </div> 
        <button className="accordion">
           Why is Villa Agency the best ?
        </button> 
        <div className='accordion-content'>
        <p>Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="">best free CSS templates</a> in the world. Please tell your friends about it.</p>  
        </div> 
       
      </div>
    </div>
  )
}

export default FeaturedText
