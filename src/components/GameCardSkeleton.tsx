import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react"


const gameCardSkeleton = () => {
  return (
     <Card width='300px' borderRadius={10} overflow='hidden'>
        <Skeleton height='200px' />
        <CardBody>
           <SkeletonText />
        </CardBody>
    </Card>
        
  )
}

export default gameCardSkeleton