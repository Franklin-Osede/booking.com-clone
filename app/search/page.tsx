type Props={
    searchParams:SearchParams;
}

type SearchParams= {
    url: URL;
    ss: string;
    checkin:string;
    src:string;
    group_adults:string;
    group_children: string;
    no_rooms: string;

}


function SearchPage(props:Props) {
  return (
    <div>
      Search Page
    </div>
  )
}

export default SearchPage
