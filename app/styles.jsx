

export var main_root =  
{
    height: "100%",
}

export var page_root = 
{
    flexGrow: 1,
    height: "100%",
    marginTop: "75px",
}

const test = theme => (
    {
        root: {
            height: "100%",
          },
        body: {
            marginTop: "75px",
            height: "100%",
            [theme.breakpoints.down('sm')]: {
              width: "100%",
            },
            [theme.breakpoints.up('md')]: {
                width: "95%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "80%",
            },
            [theme.breakpoints.up('xl')]: {
                width: "50%",
            },
          },
      }
    );

export default {
    main_root,
    page_root,
    test
}
