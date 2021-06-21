import moment from 'moment'
export const filterPosts = (posts, selectedPeriod) => {
  return posts.filter(post => {
    if (
      selectedPeriod === 'today' &&
      post.created.isAfter(moment().subtract(1, 'day'))
    ) {
      return true
    }
    if (
      selectedPeriod === 'this week' &&
      post.created.isAfter(moment().subtract(7, 'day'))
    ) {
      return true
    }
    if (
      selectedPeriod === 'this month' &&
      post.created.isAfter(moment().subtract(1, 'month'))
    ) {
      return true
    }
  })
}
