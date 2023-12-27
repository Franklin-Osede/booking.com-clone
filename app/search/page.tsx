import {notFound} from "next/navigation"

type Props={
    searchParams:SearchParams;
}

export type SearchParams= {
    url: URL;
    checkin:string;
    group_adults:string;
    group_children: string;
    no_rooms: string;

}


async function SearchPage({searchParams}:Props) {
    if(!searchParams.url) return notFound();

    const results= await fetchResults(searchParams)

    if(!results) return <div> No results..</div>
  return (
    <div>
      Search Page
    </div>
  )
}

export default SearchPage
