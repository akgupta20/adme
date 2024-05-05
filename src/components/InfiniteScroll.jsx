import useInfiniteScrollData from "../Hooks/useInfiniteScrollData";
import styles from "./InfiniteScroll.module.css";

const InfiniteScroll = () => {
  const { data, loading } = useInfiniteScrollData();
  // console.log(data[0].url)
  return (
    <div>
      <div className={styles.imgContainer}>        
        {data.map((img) => (
          <img key={img?.id} src={img?.download_url} alt={img?.author} className={styles.img} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
