import styles from "./page.module.css";

export default function Active(){
    return(
        <div>
            <h1 className={styles.activeHead}>Active Roster</h1>
            
            <div className={styles.graybox}>
                <h2 className={styles.activeHeader2}>Executive Board</h2>

                <div className={styles.itemPres}>
                    <h3 className={styles.activeHeader3}>President</h3>
                    <div>Adam "Joker" Prince</div>
                </div>

                <div className={styles.box}>
                    {executive_positions.map((item) => (
                        <PositionExec key={item.role} {...item} />   
                    ))}
                </div>
            </div>

            <div className={styles.whitebox}>
                <h2 className={styles.activeHeader2}>Minor Board</h2>
                <div className={styles.box}>
                    {minor_positions.map((item) => (
                        <PositionMinor key={item.role} {...item} />   
                    ))}
                </div>

            </div>
          
        </div>
    );
}
function PositionExec({role, bro}){
    return(
        <div className={styles.itemExec}>
            <h3 className={styles.activeHeader3}>{role}</h3>
            <div>{bro}</div>
        </div>
    )
}
function PositionMinor({role, first, second, third}){
    return(
        <div className={styles.itemMinor}>
            <h3 className={styles.activeHeader3}>{role}</h3>
            <div>{first}</div>
            <div>{second}</div>
            <div>{third}</div>
        </div>
    )
}

const executive_positions = [
    { role: 'External VP',  bro: 'Jason "Mach 8" Hungreder'},
    { role: 'Internal VP',  bro: 'Gianni "Maverick" Bonval'},
    { role: 'Secretary',    bro: 'Ryan "Wicked Games" Cheung'},
    { role: 'Treasurer',    bro: 'Stanley "Regulus" Nguyen'}
]

const minor_positions = [
    { role: 'Academic',                 first: 'Ryan "Wicked Games" Cheung',    second: '', third:''},
    { role: 'Brotherhood',              first: 'Greg "Apex" Dunne',             second: 'Jayson "Résonnant Vie" You', third:''},
    { role: 'Social',                   first: 'Greg "Apex" Dunne',             second: 'Zack "Vox" Neville', third:''},
    { role: 'Philanthropy',             first: 'Greg "Apex" Dunne',             second: '', third:''},
    { role: 'Fundraiser',               first: 'Nao "Vertex" Tomita',           second: 'Chen Hui "Zenith" Li', third:''},
    { role: 'Service Chair',            first: 'Zack "Vox" Neville',                      second: '', third: ''},
    { role: 'Risk Management',          first: 'Stanley "Regulus" Nguyen',      second: '', third:''},
    { role: 'Public Relations',         first: 'Gianni "Maverick" Bonval',      second: 'Zack "Vox" Neville', third:''},
    { role: 'Performance',              first: 'Zack "Vox" Neville',            second: 'Adam "Joker" Prince', third: ''},
    { role: 'Install Coordinator',      first: 'Chen Hui "Zenith" Li',          second: 'Ryan "Wicked Games" Cheung', third: 'Jayson "Résonnant Vie" You'},
    { role: 'IGC Delegate',             first: 'Jayson "Résonnant Vie" You',    second: '', third: ''},
    { role: 'PAC Rep',                  first: 'Nao "Vertex" Tomita',           second: '', third: ''},
    { role: 'Cultural',                 first: 'Nao "Vertex" Tomita',           second: '', third: ''},
    { role: 'Web Master',               first: 'Gianni "Maverick" Bonval',      second: 'Jayson "Résonnant Vie" You', third: ''}

    // { col:'col3', role: 'Probate Chair',            first: 'LongName', second: '', third: ''},
    // { col:'col3', role: 'Rush/Recruitment Chair',   first: 'LongName', second: '', third: ''}
]