import Image from "next/image";
import styles from "./page.module.css";

export default function About(){
    return(
        <div className={styles.aboutPage}>
            {/* Image Dimensions 1903x349 pixels */}
            <Image className={styles.imgAboutMain} src="/AboutPage.webp" width={1903} height={349}/>
            <h1 className={styles.aboutHead}>About</h1>

            <div className={styles.graybox}>
                <div className={styles.aboutHeader2}>Overview</div>
                <div className={styles.aboutHeader3}>Mission</div>
                <p>To guide men on a lifelong discovery of authenticity and personal growth.</p>
                <br></br>
                <div className={styles.aboutHeader3}>Vision</div>
                <p>A world where Lambda men live authentic, fulfilling lives and contribute through the pursuit of their noble purpose.</p>
                <br></br>
                <div className={styles.aboutHeader3}>Core Values</div>
                <p><b>Authenticity:</b> Demonstration of one's true self to the world, despite external expectations.</p>
                <p><b>Courageous Leadership:</b> Integrity through action toward a more humane world, especially in times of adversity.</p>
                <p><b>Cultural Heritage:</b> Ideas and experiences of a people, transcending the world through generations.</p>
                <p><b>Love:</b> Care and respect for oneself, the brotherhood, and the world.</p>
                <p><b>Wisdom:</b> Pursuit of understanding and its positive application toward one's life and the world.</p>
            </div>

            <div className={styles.whitebox}>
                <div className={styles.aboutHeader2}>History</div>
                <div className={styles.info}>
                    {/* Image Dimensions 300x164 pixels */}
                    <Image className={styles.image} src="/AboutPage1.webp" width={300} height={164}/>
                    <div className={styles.text}>
                        Lambda Phi Epsilon was founded on February 25, 1981 by a group of nineteen dedicated men led by principal founder Mr. Craig Ishigo. 
                        The goal of the founders was to transcend the limitations faced by traditional Asian American interest organizations on campus. 
                        While these organizations were often split along lines of national origins, the founders sought an establishment that drew its 
                        membership equally from the different segments of the Asian American community. Their vision was that the members would eventually 
                        become the leaders of their respective ethnic communities, and thus, bridge the gaps fragmenting the Asian American community 
                        through their affiliation with a common organization.
                    </div>            
                </div>
                <div className={styles.info}>
                    {/* Image Dimensions 300x200 pixels */}
                    <Image className={styles.image} src="/AboutPage2.webp" width={300} height={200}/>

                    <div className={styles.text}>
                        On May 28th, 1990, the fraternity, now with six chapters total, convened on the campus of the University of California, 
                        Irvine for the first annual National Convention, which to this day has been held regularly over Memorial Day weekend. 
                        A national governing body was established to oversee the development of individual chapters and the fraternity as a whole, 
                        with Mr. Robert Mimaki of Beta Chapter, Mr. Eric Naritomi of Epsilon Chapter, and Mr. Doug Nishida of Delta Chapter 
                        appointed as National President, Northern Governor and Southern Governor, respectively.
                    </div>
                    <br></br>
                    <div className={styles.text}>
                        Today, Lambda Phi Epsilon is widely renowned as the preeminent international Asian-interest fraternal organization, 
                        providing outstanding leadership, philanthropy, and advocacy in the community.
                    </div>
                </div>
                
                <div className={styles.box}>
                    {identities.map((item) => (
                        <Identity key={item.element} {...item} />
                    ))}
                </div>
            </div>

            <div className={styles.graybox}>
                <div className={styles.aboutHeader2}>Philanthropy</div>
                {/* Image Dimensions 960x540 pixels */}
                <Image className={styles.image} src="/Philanthropy.jpg" width={960} height={540}/>

                <div className={styles.text}>
                    NMDP is a global non-profit leader in cell therapy, helping find cures and save lives for patients with blood cancers and disorders. 
                    With the help of blood stem cell donors from the world's most diverse registry and our extensive network of transplant partners, 
                    physicians and caregivers, we're expanding access to treatment so that every patient can receive their life-saving cell therapy
                </div>
            </div>
        </div>
    );
}

function Identity({element, detail}){
    return(
        <div className={styles.aboutLPhiE}>
            <p><strong>{element}</strong></p>
            <p>{detail}</p>
        </div>
    )
}

const identities = [
  { element: 'Motto', detail: 'To Be Leaders Among Men' },
  { element: 'Color', detail: 'Royal Blue and White' },
  { element: 'Mascot', detail: 'Dragon' },
  { element: 'Nicknames', detail: 'Lambdas, LPhiE, 人中王' },
  { element: 'Founding Date', detail: 'February 25, 1981' },
  { element: 'Founding Campus', detail: 'University of California Los Angeles' },
  { element: 'Fraternal Scope', detail: 'International' },
  { element: 'Fraternal Classification', detail: 'Social and Service' },
];

