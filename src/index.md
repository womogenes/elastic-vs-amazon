---
layout: article.njk
---

# Elastic vs. Amazon

_by William Y. Feng \
May 30, 2024_

In 2021, software startup Elastic stood up to Amazon in one of the most historic fights in the tech space. Let's investigate how it got to this point.

![](https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt11797b8c899b0a4f/620d211200f003242ae1138e/announcement-elastic-aws-blog-1680x980.png)
_[Source: Elastic](https://www.elastic.co/blog/elastic-and-amazon-reach-agreement-on-trademark-infringement-lawsuit)_

## Background

### What is Elastic?

Elastic is a tech company most widely known for Elasticsearch, a popular search platform and engine used by companies such as [Tinder, eBay, Uber, Lyft and Netflix](https://www.bbc.com/news/technology-48866151).

[Elasticsearch](https://github.com/elastic/elasticsearch) has been free and open-source software under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0) up until the 2021 license change, meaning that anyone could freely use and distribute the software for any purpose, including commercial ones. Elastic made revenue by selling its own hosted versions of the software and by creating proprietary features that users had to pay for.

### How did Amazon get involved?

In 2015, Amazon started to offer managed Elasticsearch services on their cloud platform as "Amazon Elasticsearch Services." Though Amazon was entitled to do this under the Apache 2.0 license, Elastic was unhappy for a couple reasons:

1. Because Amazon's new service was also named Elasticsearch, consumers were confused about which product was which.
2. Amazon was reportedly making more off of this product than Elastic, and didn't share any of its revenue. ([New York Times](https://www.nytimes.com/2019/12/15/technology/amazon-aws-cloud-competition.html))

### How did Elastic respond?

Elastic took a couple of steps in response to Amazon's new service. In September of 2017, Elastic filed a federal lawsuit against Amazon for trademark infringement. They also created more paid, proprietary features (which Amazon re-implemented as "Open Distro for Elasticsearch" and offered to its users for free).

The final nail in the coffin came in January 2021, when Elastic announced that it would be switching the Elasticsearch license from Apache 2.0 to the Server-Side Public License. In the announcement, ["Amazon: NOT OK - why we had to change Elastic licensing,"](https://www.elastic.co/blog/why-license-change-aws) Elastic founder and CEO states:

> When Amazon announced their Open Distro for Elasticsearch fork, they used code that we believe was copied by a third party from our commercial code and provided it as part of the Open Distro project. We believe this further divided our community and drove additional confusion.
>
> More on this [here](https://www.elastic.co/blog/dear-search-guard-users-including-amazon-elasticsearch-service-open-distro-and-others). NOT OK.
>
> Recently, we found more examples of what we consider to be ethically challenged behavior. We have differentiated with proprietary features, and now we see these feature designs serving as "inspiration" for Amazon, telling us their behavior continues and is more brazen. NOT OK.
>
> We collaborate with cloud service providers, including Microsoft, Google, Alibaba, Tencent, Clever Cloud, and others. We have shown we can find a way to do it. We even work with other parts of Amazon. We are always open to doing that; it just needs to be OK.

Elasticsearch's new Server-Side Public License (SSPL) is not open-source, and this meant Amazon was no longer able to offer Elasticsearch as a managed service. They had two options:

1. Create a fork of the latest Apache-licensed version of Elasticsearch and continue offering it as a service service, sharing no revenue with Elastic.
2. Collaborate with Elastic, selling the official version of Elasticsearch on Amazon's infrastructure and share some revenue.

Let's look at the game theory behind this. [/game-theory](/game-theory)
