import Link from 'next/link'
import React from 'react'

import { createUseStyles } from 'react-jss'

const Header = (props) => {
  const classes = useStyles()
  return (
    <div className={classes['container']}>
      <div className={classes['Header']}>
        <div className={classes['Frame2']}>
          <span className={classes['text']}>
            <Link href="/">
             <span>HOME</span>
            </Link>
          </span>
          <span className={classes['text2']}>
            <Link href="/signup">
                 <span>SignUp</span>
            </Link>
            <Link href="/login">
                 <span>Login</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header

const useStyles = createUseStyles({
  container: {
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '17px 18px',
    borderColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  Frame2: {
    display: 'flex',
    alignItems: 'flex-start',
    borderColor: 'transparent',
    position: 'relative',
    width: '100%',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    marginRight: '0px',
    marginBottom: '0',
    alignSelf: 'auto',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text2: {
    color: 'rgba(0, 0, 0, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    marginRight: '0',
    marginBottom: '0',
    alignSelf: 'auto',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
})
