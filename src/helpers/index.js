export function uuid() {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('board', JSON.stringify(state.board))
  })
}

export const currency = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formatter.format(amount).replace(/\D00(?=\D*$)/, '')
}

export const capitalize = str => {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatDate = value => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

export async function init({app, store, error, isClient}) {
  if (isClient) return

  try {
    const messages = await app.$axios.$get(
      `${process.env.VUE_APP_API_URL}/messages`,
    )
    store.commit('INIT', messages)
  } catch (err) {
    store.commit('INIT', [])
    error({statusCode: 500, message: 'Oops, try again'})
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')

export const truncate = str => `${strip(str).substr(0, 50)}...`

export const flattened = arr => [].concat(...arr)

export const formatCurrency = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formatter.format(amount).replace(/\D00(?=\D*$)/, '')
}

export const toTitleCase = str => {
  const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i
  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/
  const wordSeparators = /([ :–—-])/

  return str
    .split(wordSeparators)
    .map(function (current, index, array) {
      if (
        /* Check for small words */
        current.search(smallWords) > -1 &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== '-' ||
          (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase()
      }

      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        return current
      }

      /* Ignore URLs */
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return current
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase()
      })
    })
    .join('')
}

export const getEventIndexById = (state, eventId) =>
  state.events.findIndex(event => event.id.toString() === eventId.toString())

const data = [
  '3 Musketeers',
  '7 Up',
  '3 Cheese pizza',
  'Apple',
  'Oranges',
  'Asparagus',
  'Bananas',
  'Onions',
]

const sortAndGroup = async () => {
  const sortedData = data.sort()
  const reducedData = sortedData.reduce((items, dataElement) => {
    if (!items.find(item => item.header === dataElement.charAt(0))) {
      items.push({header: dataElement.charAt(0)})
    }
    items.push({name: dataElement})
    return items
  }, [])
  return reducedData.map(item => item.header || item.name)
}

sortAndGroup().then(result => console.log(result))

function groupNames(array) {
  let hash = Object.create(null)
  let result = []

  array.forEach(function (item) {
    var key = item[0].toUpperCase()
    if (!hash[key]) {
      hash[key] = []
      result.push({letter: key, names: hash[key]})
    }
    hash[key].push(item)
  })
  return result
}

console.log(
  groupNames([
    'Anne',
    'Bert',
    'Claudine',
    'Dirk',
    'Anton',
    'Babette',
    'Eugen',
    'Felicitas',
  ]),
)
