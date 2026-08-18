const $=id=>document.getElementById(id);
const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const L=(name,url)=>({name,url});
const P=(name,diff,url)=>({name,diff,url});
const D=(focus,time,learn,tasks,resources=[],problems=[])=>({focus,time,learn,tasks,resources,problems});
const W=(n,title,focus,days)=>({n,title,focus,days});
const weeks=[
W(1,'Foundations','DSA + system design fundamentals + backend scalability',{
Mon:D('DSA — Arrays + Hashing','60 min',['HashMap/HashSet and expected O(1) lookup','Frequency counting','Canonical keys'],['Solve all assigned problems','Write 3 pattern notes'],[L('NeetCode Roadmap','https://neetcode.io/roadmap')],[P('Two Sum','Easy','https://leetcode.com/problems/two-sum/'),P('Contains Duplicate','Easy','https://leetcode.com/problems/contains-duplicate/'),P('Valid Anagram','Easy','https://leetcode.com/problems/valid-anagram/'),P('Group Anagrams','Medium','https://leetcode.com/problems/group-anagrams/'),P('Product of Array Except Self','Medium','https://leetcode.com/problems/product-of-array-except-self/')]),
Tue:D('System Design — Scalability Basics','75 min',['Vertical vs horizontal scaling','Stateless services','Load balancing','Latency vs throughput','Availability','Sync vs async','Cache-aside'],['Draw URL shortener architecture','Estimate 100M URLs/month','Explain what changes at 10x traffic'],[L('System Design Primer — Start Here','https://github.com/donnemartin/system-design-primer#system-design-topics-start-here'),L('System Design Primer — Scalability','https://github.com/donnemartin/system-design-primer#scalability')]),
Wed:D('DSA — Two Pointers + Sliding Window','60 min',['Converging pointers','Sliding-window state','Avoid recomputation'],['State the pattern before coding','Explain one solution aloud'],[L('NeetCode Roadmap','https://neetcode.io/roadmap'),L('LeetCode Study Plans','https://leetcode.com/studyplan/')],[P('Valid Palindrome','Easy','https://leetcode.com/problems/valid-palindrome/'),P('Two Sum II','Medium','https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/'),P('3Sum','Medium','https://leetcode.com/problems/3sum/'),P('Longest Substring Without Repeating Characters','Medium','https://leetcode.com/problems/longest-substring-without-repeating-characters/'),P('Longest Repeating Character Replacement','Medium','https://leetcode.com/problems/longest-repeating-character-replacement/')]),
Thu:D('Backend — Scalability in Java/Spring','75 min',['Request/thread pools','DB connection pools','Timeouts','Retries and retry storms','Rate limiting'],['Explain how retries amplify an outage','Sketch a rate limiter'],[L('Spring Boot Reference','https://docs.spring.io/spring-boot/reference/'),L('System Design Primer — Load Balancer','https://github.com/donnemartin/system-design-primer#load-balancer')]),
Fri:D('Project Deep Dive #1','45 min',['Problem/requirements','Scale/metrics','Architecture','Exact ownership','Trade-offs','Failures','Impact'],['Create a one-page project story','Be ready for a 30-minute drill-down']),
Sat:D('Deep Work — URL Shortener + LLD','5–7h',['RPS/storage estimation','ID generation','Caching','DB scaling','Failure modes','Parking Lot design'],['Complete a 45–60 minute design','Write everything you forgot'],[L('System Design Primer','https://github.com/donnemartin/system-design-primer')],[P('Best Time to Buy and Sell Stock','Easy','https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'),P('Maximum Subarray','Medium','https://leetcode.com/problems/maximum-subarray/'),P('Longest Consecutive Sequence','Medium','https://leetcode.com/problems/longest-consecutive-sequence/'),P('Subarray Sum Equals K','Medium','https://leetcode.com/problems/subarray-sum-equals-k/')]),
Sun:D('Mock + LLD + Weekly Review','5–7h',['Timed coding','Rate-limiter design','SOLID/composition/interfaces','2 behavioral stories'],['Score DSA/system design/backend/LLD/communication/project depth 1–5'],[L('System Design Primer','https://github.com/donnemartin/system-design-primer')],[P('Longest Substring Without Repeating Characters','Medium','https://leetcode.com/problems/longest-substring-without-repeating-characters/'),P('Merge Intervals','Medium','https://leetcode.com/problems/merge-intervals/'),P('Top K Frequent Elements','Medium','https://leetcode.com/problems/top-k-frequent-elements/'),P('Binary Search','Easy','https://leetcode.com/problems/binary-search/')])}),
W(2,'Java + MySQL/TiDB','Java concurrency, JVM and database internals',{
Mon:D('Java — Collections Internals','60 min',['ArrayList vs LinkedList','HashMap internals','equals/hashCode','TreeMap/TreeSet','ConcurrentHashMap'],['Explain collisions/resizing','Explain why mutable keys are dangerous'],[L('HashMap Java API','https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html')],[P('LRU Cache','Medium','https://leetcode.com/problems/lru-cache/')]),
Tue:D('Java — Threads + Concurrency','75 min',['Thread vs task','synchronized','volatile','Locks','Executors','Race conditions','Deadlocks'],['Explain one race condition','Explain one deadlock'],[L('java.util.concurrent','https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html')],[P('Print in Order','Easy','https://leetcode.com/problems/print-in-order/')]),
Wed:D('JVM Memory + GC','60 min',['Heap/stack/metaspace','Allocation pressure','GC pauses','Memory leaks','Production diagnosis'],['Explain why memory can grow despite GC'],[L('Java GC Tuning','https://docs.oracle.com/en/java/javase/21/gctuning/')]),
Thu:D('MySQL — Indexes + EXPLAIN','75 min',['B-tree indexes','Composite index order','Covering indexes','Selectivity','EXPLAIN'],['Take one query and propose its best index'],[L('MySQL EXPLAIN','https://dev.mysql.com/doc/refman/8.4/en/explain.html')],[P('SQL 50','Study Plan','https://leetcode.com/studyplan/top-sql-50/')]),
Fri:D('Transactions + Isolation','45 min',['ACID','Read committed','Repeatable read','Serializable','Locks','Deadlocks','MVCC'],['Explain a lost update and prevention'],[L('MySQL Isolation Levels','https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html')]),
Sat:D('Deep Work — Java + MySQL/TiDB','5–7h',['Concurrency coding','JVM troubleshooting','MySQL query tuning','TiDB architecture','Distributed SQL trade-offs'],['Explain when TiDB is preferable to single MySQL','Design a service using TiDB + Redis'],[L('TiDB Architecture','https://docs.pingcap.com/tidb/stable/tidb-architecture/'),L('InnoDB Introduction','https://dev.mysql.com/doc/refman/8.4/en/innodb-introduction.html')],[P('LRU Cache','Medium','https://leetcode.com/problems/lru-cache/'),P('Number of Islands','Medium','https://leetcode.com/problems/number-of-islands/')]),
Sun:D('Database Mock + Review','5–7h',['1 coding mock','1 database design mock','Deadlock debugging','Project architecture drill-down'],['Write 5 database questions you cannot yet answer'],[L('MySQL Reference','https://dev.mysql.com/doc/refman/8.4/en/')],[P('Merge K Sorted Lists','Hard','https://leetcode.com/problems/merge-k-sorted-lists/'),P('Number of Islands','Medium','https://leetcode.com/problems/number-of-islands/')])}),
W(3,'Redis + Caching','Redis data structures, caching and distributed primitives',{
Mon:D('Redis Fundamentals','60 min',['Strings, Hashes, Sets, Sorted Sets','TTL and key design'],['Run through 5 Redis commands','Decide which data structure fits 5 use cases'],[L('Redis Data Types','https://redis.io/docs/latest/develop/data-types/')]),
Tue:D('Cache-Aside','60 min',['Cache hit/miss','TTL','Read path','Write path','Invalidation'],['Draw cache-aside for product lookup','List consistency risks'],[L('Redis Docs','https://redis.io/docs/latest/')]),
Wed:D('Eviction + Cache Stampede','60 min',['LRU/LFU concepts','Hot keys','Stampede','Jittered TTL'],['Explain 2 mitigations for stampede'],[L('Redis Eviction','https://redis.io/docs/latest/develop/reference/eviction/')]),
Thu:D('Rate Limiting','75 min',['Token bucket','Leaky bucket','Fixed/sliding window','Redis counters'],['Design distributed rate limiter','Discuss clock/TTL edge cases'],[L('Redis INCR','https://redis.io/docs/latest/commands/incr/')]),
Fri:D('Redis Distributed Patterns','45 min',['Distributed locks','Dedup keys','Streams overview','Failure semantics'],['Explain when Redis should NOT be the source of truth'],[L('Redis Streams','https://redis.io/docs/latest/develop/data-types/streams/')]),
Sat:D('System Design — Product Catalog','5–7h',['MySQL/TiDB source of truth','Redis cache','Hot products','Invalidation','Fallback when Redis fails'],['Full 60-minute design','Estimate traffic and cache size'],[L('System Design Primer','https://github.com/donnemartin/system-design-primer')],[P('Design Cache','System Design','https://github.com/donnemartin/system-design-primer')]),
Sun:D('Redis Mock + Review','5–7h',['Architecture questions','Failure scenarios','One coding mock'],['Score Redis knowledge 1–5','Create 10 flash questions'],[L('Redis Docs','https://redis.io/docs/latest/')])}),
W(4,'Distributed Systems','Consistency, replication, coordination and failure',{
Mon:D('CAP + Consistency','60 min',['Consistency vs availability','Partition reality','Strong vs eventual consistency'],['Explain CAP with a concrete backend example'],[L('Designing Data-Intensive Applications notes','https://github.com/robinzonj/microservices-patterns')]),
Tue:D('Replication','60 min',['Leader/follower','Failover','Read replicas','Replication lag'],['Design failover path','Discuss stale reads']),
Wed:D('Quorums','60 min',['Read/write quorum','N,R,W reasoning','Failure tolerance'],['Work through 3 quorum examples']),
Thu:D('Idempotency','60 min',['Idempotency keys','Duplicate requests','Safe retries'],['Design idempotent payment API'],[L('Stripe Idempotency','https://docs.stripe.com/api/idempotent_requests')]),
Fri:D('Resilience','60 min',['Timeouts','Retries','Backoff','Circuit breakers','Graceful degradation'],['Explain retry storm and circuit-breaker flow']),
Sat:D('Distributed System Design','5–7h',['Failure-first architecture','Consistency choices','Recovery','Observability'],['Design a notification system end-to-end'],[L('System Design Primer','https://github.com/donnemartin/system-design-primer')]),
Sun:D('Distributed Systems Mock','5–7h',['60-minute design','Debugging scenario','Review'],['Answer 15 distributed-systems questions aloud'])}),
W(5,'Kafka I','Topics, partitions, producers and consumers',{
Mon:D('Kafka Architecture','60 min',['Broker','Topic','Partition','Offset'],['Draw a 3-broker / 6-partition cluster'],[L('Kafka Introduction','https://kafka.apache.org/documentation/#introduction')]),
Tue:D('Consumer Groups','60 min',['Consumer groups','Partition assignment','Offsets'],['Explain why consumers cannot exceed partitions for parallelism'],[L('Kafka Consumer Groups','https://kafka.apache.org/documentation/#intro_consumers')]),
Wed:D('Ordering + Partition Keys','60 min',['Ordering within partition','Key choice','Hot partitions'],['Choose partition keys for 3 systems']),
Thu:D('Producers','60 min',['acks','Batching','Compression','Retries'],['Explain latency vs durability trade-off'],[L('Kafka Producer Config','https://kafka.apache.org/documentation/#producerconfigs')]),
Fri:D('Replication','60 min',['Replication factor','ISR','Leader election'],['Explain what happens when a broker dies']),
Sat:D('Kafka Event-Driven Design','5–7h',['Producer → topic → consumer','Backpressure','Partitioning','Storage'],['Design order-processing pipeline'],[L('Kafka Design','https://kafka.apache.org/documentation/#design')]),
Sun:D('Kafka Mock + Review','5–7h',['Producer/consumer questioning','Architecture recap'],['Draw Kafka architecture from memory'])}),
W(6,'Kafka II','Delivery semantics, lag, retries, DLQs and rebalancing',{
Mon:D('Delivery Semantics','60 min',['At-most-once','At-least-once','Exactly-once concepts'],['Explain why duplicate processing still happens'],[L('Kafka Semantics','https://kafka.apache.org/documentation/#semantics')]),
Tue:D('Idempotent Consumers','60 min',['Dedup keys','Processed-event table','Idempotent writes'],['Design idempotent DB consumer']),
Wed:D('Retries + Backoff','60 min',['Exponential backoff','Retry topics','Transient vs permanent errors'],['Design retry topology']),
Thu:D('Dead-Letter Queues','60 min',['Poison messages','DLQ metadata','Replay'],['Define DLQ replay strategy']),
Fri:D('Consumer Lag','60 min',['Lag signals','Slow consumer','Hot partition','Downstream bottleneck'],['Create diagnosis flow']),
Sat:D('Kafka Reliability Simulation','5–7h',['Broker failure','Consumer failure','DB outage','Rebalance'],['Walk through 4 incident scenarios'],[L('Kafka Ops','https://kafka.apache.org/documentation/#operations')]),
Sun:D('Kafka Production Mock','5–7h',['60-minute Kafka design','15 production questions'],['Write top 10 Kafka mistakes'])}),
W(7,'Elasticsearch','Search internals, shards, replicas and scaling',{
Mon:D('Inverted Index','60 min',['Terms','Inverted index','Why search differs from SQL'],['Explain indexing vs query time'],[L('Elastic Guide','https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html')]),
Tue:D('Mappings','60 min',['text vs keyword','Numeric/date fields','Dynamic mapping'],['Design mapping for product catalog'],[L('Mappings','https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html')]),
Wed:D('Analyzers','60 min',['Tokenizer','Filters','Normalization'],['Choose analyzer for names vs exact IDs'],[L('Analyzers','https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html')]),
Thu:D('Queries','60 min',['match','term','bool','filter context'],['Write 5 example search intents'],[L('Query DSL','https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html')]),
Fri:D('Aggregations','60 min',['Bucket vs metric aggregations'],['Design 3 catalog aggregations'],[L('Aggregations','https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html')]),
Sat:D('Shards + Replicas','5–7h',['Shard sizing','Replica strategy','Refresh','Reindexing'],['Design scalable search architecture'],[L('Shards and Replicas','https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html')]),
Sun:D('Search Mock + Review','5–7h',['Architecture drill','Failure scenarios'],['Explain why Elasticsearch should usually not be the transactional source of truth'])}),
W(8,'CDC + Data Consistency','TiDB/MySQL → Kafka → Elasticsearch',{
Mon:D('Dual-Write Problem','60 min',['DB write + ES write failure window','Lost update scenarios'],['Explain why direct dual-write is unsafe']),
Tue:D('Transactional Outbox','60 min',['Atomic DB + outbox write','Publisher'],['Draw outbox architecture'],[L('Microservices Outbox Pattern','https://microservices.io/patterns/data/transactional-outbox.html')]),
Wed:D('CDC Concepts','60 min',['Change events','Ordering','Offsets'],['Compare outbox vs CDC at high level'],[L('TiCDC','https://docs.pingcap.com/tidb/stable/ticdc-overview/')]),
Thu:D('Idempotent Indexing','60 min',['Event IDs','Version checks','Upserts'],['Design deduplication for ES consumer']),
Fri:D('Replay + Reconciliation','60 min',['Replay','Backfill','Repair jobs'],['Define recovery flow after ES outage']),
Sat:D('End-to-End Design','5–7h',['TiDB/MySQL','Kafka','Elasticsearch','Redis','Failure handling'],['Design product search with source of truth + search index'],[L('TiDB Architecture','https://docs.pingcap.com/tidb/stable/tidb-architecture/'),L('Kafka Docs','https://kafka.apache.org/documentation/'),L('Elasticsearch Guide','https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html')]),
Sun:D('Consistency Mock','5–7h',['Failure injection','Design review'],['Answer 15 consistency/reliability questions'])}),
W(9,'LLD','SOLID, composition, interfaces and extensibility',{
Mon:D('SOLID','60 min',['SRP','OCP','LSP','ISP','DIP'],['Refactor one toy design on paper'],[L('SOLID','https://refactoring.guru/design-patterns/solid')]),
Tue:D('Composition','60 min',['Composition over inheritance','Interfaces'],['Model payment strategies']),
Wed:D('Patterns','60 min',['Strategy','Factory','Observer','Builder'],['Identify where each pattern is justified'],[L('Design Patterns','https://refactoring.guru/design-patterns')]),
Thu:D('Dependency Injection','60 min',['Constructor injection','Testing','Spring DI'],['Explain Spring bean dependency graph'],[L('Spring Dependency Injection','https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html')]),
Fri:D('Object Modeling','60 min',['Entities','Services','Repositories','Boundaries'],['Turn one backend feature into LLD']),
Sat:D('LLD Practice','5–7h',['Parking Lot','Notification framework','Scheduler'],['Implement one LLD problem in Java']),
Sun:D('LLD Mock','5–7h',['45–60 minute LLD','Review abstractions'],['Score clarity/extensibility/testability 1–5'])}),
W(10,'Concurrency','Java concurrency and production behavior',{
Mon:D('Executors','60 min',['ExecutorService','Thread pools','Queueing'],['Explain fixed vs cached pool'],[L('ExecutorService','https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html')]),
Tue:D('Locks','60 min',['synchronized','ReentrantLock','ReadWriteLock'],['Choose lock for 3 scenarios']),
Wed:D('Atomics','60 min',['AtomicInteger','CAS','Lock-free basics'],['Explain CAS at a conceptual level']),
Thu:D('Deadlocks','60 min',['Mutual exclusion','Hold and wait','Ordering'],['Find deadlock in a code sketch']),
Fri:D('Concurrent Collections','60 min',['ConcurrentHashMap','BlockingQueue'],['Choose appropriate collection']),
Sat:D('Concurrency Coding','5–7h',['Thread-safe cache','Producer/consumer'],['Implement + test concurrent design']),
Sun:D('Concurrency Mock','5–7h',['Debugging','Reasoning'],['Explain thread safety without notes'])}),
W(11,'Production Engineering','Debugging, reliability and observability',{
Mon:D('Latency Debugging','60 min',['p50/p95/p99','Tracing','Dependency latency'],['Build hypothesis → telemetry flow']),
Tue:D('CPU / Memory','60 min',['CPU saturation','Heap growth','GC pressure'],['Explain diagnosis steps']),
Wed:D('DB Bottlenecks','60 min',['Slow queries','Lock contention','Connections'],['Create MySQL bottleneck checklist']),
Thu:D('Kafka Lag','60 min',['Lag by partition','Consumer throughput','Downstream bottleneck'],['Create incident runbook']),
Fri:D('Observability','60 min',['Logs','Metrics','Traces','SLOs'],['Define 5 useful service metrics'],[L('OpenTelemetry','https://opentelemetry.io/docs/')]),
Sat:D('Incident Simulation','5–7h',['Latency spike','DB outage','Kafka lag'],['Run 3 mock incidents end-to-end']),
Sun:D('Production Mock','5–7h',['Mitigation','Root cause','Prevention'],['Practice explaining one real incident from your experience'])}),
W(12,'Project Deep Dives','Turn real work into SDE 3 evidence',{
Mon:D('Project #1 — Problem + Scale','60 min',['Problem','Users/traffic','Constraints'],['Write exact metrics you know']),
Tue:D('Project #1 — Architecture','60 min',['Components','Data flow','Dependencies'],['Draw architecture from memory']),
Wed:D('Project #1 — Ownership','60 min',['Your work','Decisions','Trade-offs'],['Separate “I” from “we”']),
Thu:D('Project #2','60 min',['Repeat the same framework'],['Create second one-page story']),
Fri:D('Project #3','60 min',['Repeat the same framework'],['Create third one-page story']),
Sat:D('Project Defense Mock','5–7h',['30–45 minute deep dive','Architecture grilling'],['Answer “why this?” for every major choice']),
Sun:D('Leadership Stories','5–7h',['Ownership','Conflict','Failure','Mentoring','Influence'],['Prepare 8–10 STAR stories'])}),
W(13,'Interview Mode I','Coding + system-design + LLD mocks',{
Mon:D('Timed DSA','75 min',['Medium under time','Talk while coding'],['1 timed mock + review'],[L('LeetCode Study Plans','https://leetcode.com/studyplan/')],[P('Binary Tree Level Order Traversal','Medium','https://leetcode.com/problems/binary-tree-level-order-traversal/')]),
Tue:D('System Design Mock','90 min',['Requirements','Scale','Architecture','Failures'],['60-minute mock + 30-minute review'],[L('System Design Primer','https://github.com/donnemartin/system-design-primer')]),
Wed:D('Timed DSA','75 min',['Medium/Hard','Edge cases'],['1 timed mock + review'],[],[P('Course Schedule','Medium','https://leetcode.com/problems/course-schedule/')]),
Thu:D('LLD Mock','60 min',['Design + code sketch'],['One complete LLD mock']),
Fri:D('Behavioral','45 min',['Ownership','Conflict','Failure'],['2 stories aloud']),
Sat:D('Full Mock Loop','5–7h',['Coding + HLD + LLD + behavioral'],['Run back-to-back mocks']),
Sun:D('Review','5–7h',['Mistake log','Weak areas'],['Choose top 3 gaps for Week 14'])}),
W(14,'Interview Mode II','Weak-area correction and targeted mocks',{
Mon:D('Weak Area #1','75 min',['Review weakest technical topic'],['2 targeted problems / exercises']),Tue:D('Weak Area #2','75 min',['Review second weakest topic'],['1 design deep dive']),Wed:D('Coding Speed','75 min',['Pattern recognition','Communication'],['1 timed mock']),Thu:D('System Design Depth','90 min',['Trade-offs','Failure modes','Cost'],['1 senior-level mock']),Fri:D('Project Defense','60 min',['Current project','Metrics','Decisions'],['30-minute defense']),Sat:D('Targeted Mock Loop','5–7h',['Weak areas only'],['Run 3 mocks']),Sun:D('Review','5–7h',['Mistake elimination'],['Update readiness scores'])}),
W(15,'Target Company Prep','Company-specific loops and calibration',{
Mon:D('Role Research','60 min',['Level expectations','Backend scope'],['Build company scorecard']),Tue:D('Coding Calibration','60 min',['Typical difficulty','Common patterns'],['Solve 2 representative problems']),Wed:D('Design Calibration','90 min',['Known interview themes'],['Do 1 company-style design']),Thu:D('Behavioral Calibration','60 min',['Leadership principles / values'],['Map stories to competencies']),Fri:D('Resume + Project Alignment','45 min',['Impact bullets','Ownership'],['Prepare project pitch']),Sat:D('Full Company Mock','5–7h',['Simulate actual loop'],['Run complete loop']),Sun:D('Review','5–7h',['Feedback','Weak points'],['Fix final gaps'])}),
W(16,'Final Readiness','Full SDE 3 simulation',{
Mon:D('DSA Revision','60 min',['Review patterns and mistakes'],['5 rapid pattern drills']),Tue:D('System Design Revision','75 min',['Reusable reasoning framework'],['1 timed design']),Wed:D('Backend Revision','75 min',['Java/Spring/DB/Kafka/Redis'],['Rapid-fire 30 questions']),Thu:D('Project + Leadership','75 min',['Stories','Metrics','Ownership'],['2 stories + project defense']),Fri:D('Light Review','45 min',['No new topics'],['Review mistake log']),Sat:D('Full Loop','5–7h',['Coding + HLD + LLD + behavioral'],['Run full simulation']),Sun:D('Final Readiness','5–7h',['Logistics','Resume','Sleep plan','Weak areas'],['Final scorecard and interview plan'])})
];

const TOPICS={
'DSA':['Arrays & hashing','Two pointers','Sliding window','Binary search','Trees','Graphs','Heaps','Intervals','Monotonic stack','Backtracking','Dynamic programming'],
'Java & Spring':['Collections internals','JVM memory','GC','Java Memory Model','Threads','Executors','CompletableFuture','Locks & atomics','Spring DI','Transactions','Connection/thread pools'],
'MySQL & TiDB':['Indexes','EXPLAIN','Query optimization','Transactions','Isolation levels','Locks & deadlocks','MVCC','Replication','Partitioning','Sharding','TiDB architecture'],
'Redis':['Strings/Hash/Set/ZSet','Cache-aside','TTL','Eviction','Cache stampede','Hot keys','Rate limiting','Distributed locks','Streams'],
'Kafka':['Topics','Partitions','Producers','Consumer groups','Offsets','Ordering','Replication','Delivery semantics','Retries','DLQ','Consumer lag','Idempotency'],
'Elasticsearch':['Inverted index','Mappings','Analyzers','Queries','Aggregations','Shards','Replicas','Refresh','Reindexing','Scaling'],
'Aerospike':['Data model','Namespaces','Sets','Records','Bins','Partitions','Replication','Consistency','TTL','Rebalancing','When to choose it'],
'LLD & Concurrency':['SOLID','Composition','Interfaces','DI','Design patterns','Parking lot','Scheduler','Rate limiter','Thread safety','Deadlocks'],
'System Design':['Requirements','Estimation','APIs','Data model','Caching','Queues','Partitioning','Consistency','Reliability','Observability','Cost','Failure modes'],
'Leadership & Behavioral':['Ownership','Conflict','Influence','Mentoring','Failure','Ambiguity','Technical decision','Incident','Cost/performance win','Cross-team work']};

const LINKS={
'DSA':[['NeetCode Roadmap','https://neetcode.io/roadmap'],['LeetCode Study Plans','https://leetcode.com/studyplan/']],
'Java & Spring':[['Java Docs','https://docs.oracle.com/en/java/javase/21/'],['Spring Boot Reference','https://docs.spring.io/spring-boot/reference/']],
'MySQL & TiDB':[['MySQL Reference','https://dev.mysql.com/doc/refman/8.4/en/'],['TiDB Docs','https://docs.pingcap.com/tidb/stable/']],
'Redis':[['Redis Docs','https://redis.io/docs/latest/']],
'Kafka':[['Kafka Docs','https://kafka.apache.org/documentation/']],
'Elasticsearch':[['Elastic Guide','https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html']],
'Aerospike':[['Aerospike Docs','https://aerospike.com/docs/database/']],
'LLD & Concurrency':[['Refactoring Guru','https://refactoring.guru/design-patterns']],
'System Design':[['System Design Primer','https://github.com/donnemartin/system-design-primer']],
'Leadership & Behavioral':[['Amazon Leadership Interview Prep','https://www.amazon.jobs/content/en/how-we-hire/sde-iii-interview-prep']]};

const stateKey='sde3-v3';
let state={checks:{},confidence:{},problems:0};
try{state=Object.assign(state,JSON.parse(localStorage.getItem(stateKey)||'{}'));}catch(e){}
function save(){localStorage.setItem(stateKey,JSON.stringify(state));}
function esc(x){return String(x).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]||c));}
function id(x){return x.replace(/[^a-zA-Z0-9]+/g,'_');}
function checked(k){return !!state.checks[k];}
function toggle(k){state.checks[k]=!state.checks[k];save();render();}
function setConf(k,v){state.confidence[k]=+v;save();render();}
function dayIndex(){const n=new Date().getDay();return n===0?6:n-1;}
function currentDay(){return DAYS[dayIndex()];}
function currentWeek(){return weeks[0];}
function pct(items,prefix){if(!items.length)return 0;return Math.round(items.filter(x=>checked(prefix+x)).length/items.length*100);}
function allTopicItems(){let a=[];Object.entries(TOPICS).forEach(([g,items])=>items.forEach(i=>a.push(g+'::'+i)));return a;}
function overall(){const a=allTopicItems();return Math.round(a.filter(checked).length/a.length*100);}
function checklist(items,prefix){return '<div class="checklist">'+items.map((x,i)=>{const k=prefix+i+'::'+x;return '<label><input type="checkbox" '+(checked(k)?'checked':'')+' onchange="toggle(\''+k.replace(/'/g,"\\'")+'\')"><span>'+(checked(k)?'<s>':'')+esc(x)+(checked(k)?'</s>':'')+'</span></label>';}).join('')+'</div>';}
function links(arr){return arr.length?'<div class="links">'+arr.map(x=>'<a href="'+x.url+'" target="_blank" rel="noopener">'+esc(x.name)+' ↗</a>').join('')+'</div>':'';}
function problems(arr){return arr.length?'<div class="problems">'+arr.map((p,i)=>'<div class="problem"><span class="difficulty '+p.diff.toLowerCase().replace(' ','-')+'">'+esc(p.diff)+'</span><span class="problem-name">'+esc(p.name)+'</span><a href="'+p.url+'" target="_blank" rel="noopener">Open ↗</a></div>').join('')+'</div>':'<div class="muted">No separate coding problem today — use the exercises above.</div>';}
function dayCard(label,d,weekNo){const keybase='W'+weekNo+'-'+label+'-';return '<div class="study-card"><div class="study-head"><div><span class="daytag">'+label+'</span><h3>'+esc(d.focus)+'</h3></div><strong>'+esc(d.time)+'</strong></div><h4>Learn</h4><ul>'+d.learn.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul><h4>Do</h4>'+checklist(d.tasks,keybase)+'<h4>Problems</h4>'+problems(d.problems)+'<h4>Resources</h4>'+links(d.resources)+'</div>';}
function nav(){const items=[['dashboard','Dashboard'],['today','Today'],['weeks','16-Week Plan'],['topics','Topics & Checklists'],['projects','Projects'],['mocks','Mock Interviews']];$('nav').innerHTML=items.map(x=>'<button class="nav-btn '+(route()===x[0]?'active':'')+'" onclick="location.hash=\''+x[0]+'\'">'+x[1]+'</button>').join('');}
function route(){return (location.hash||'#dashboard').slice(1)||'dashboard';}
function renderDashboard(){const p=overall();let html='<div class="hero"><div><div class="eyebrow">SDE 2 → SDE 3</div><h2>Backend SDE 3 Preparation OS</h2><p>16 weeks · weekday-friendly · weekend-heavy. The dashboard is the study material, not just a checklist.</p><div class="stack">Java · Spring Boot · MySQL · TiDB/Rigel · Elasticsearch · Redis · Kafka · Aerospike</div></div><div class="ring-wrap"><div class="ring" style="--p:'+p*3.6+'deg"><span>'+p+'%</span></div></div></div><div class="stat-grid"><div class="stat"><span>Overall</span><b>'+p+'%</b></div><div class="stat"><span>DSA target</span><b>180–200</b><small>quality problems</small></div><div class="stat"><span>Weekly time</span><b>17h</b><small>~5h weekdays + ~12h weekend</small></div><div class="stat"><span>Priority</span><b>System Design</b><small>then backend depth</small></div></div><h2 class="section-title">Today</h2>'+todayHtml(true)+'<h2 class="section-title">16-week roadmap</h2><div class="week-grid">'+weeks.map(w=>'<button class="week-card" onclick="location.hash=\'week-'+w.n+'\'"><span>Week '+w.n+'</span><b>'+esc(w.title)+'</b><small>'+esc(w.focus)+'</small></button>').join('')+'</div>'+'<h2 class="section-title">Skill checklists</h2><div class="topic-grid">'+Object.entries(TOPICS).map(([g,items])=>'<div class="topic-card"><div class="topic-head"><h3>'+esc(g)+'</h3><b>'+pct(items,g+'::')+'%</b></div><p class="muted">'+(LINKS[g]||[]).map(x=>x.name).join(' · ')+'</p><div class="bar"><i style="width:'+pct(items,g+'::')+'%"></i></div></div>').join('')+'</div>';return html;}
function todayData(){return currentWeek().days[currentDay()];}
function todayHtml(showMore){const d=todayData();return '<div class="today-hero"><div><span class="daytag">'+currentDay()+' · Week 1</span><h3>'+esc(d.focus)+'</h3><p class="muted">'+esc(d.time)+' — use this as your complete study session.</p></div><div>'+links(d.resources)+'</div></div><div class="today-grid"><div class="study-card"><h3>What to learn</h3><ul>'+d.learn.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul><h3>What to do</h3>'+checklist(d.tasks,'TODAY-'+currentDay())+'</div><div class="study-card"><h3>Problems</h3>'+problems(d.problems)+'<h3>Deliverable</h3><p class="callout">'+(d.tasks[d.tasks.length-1]||'Finish the study session and write a short recap.')+'</p></div></div>'+(showMore?'<div class="callout">Open <b>Today</b> for the complete current-day session. Use <b>16-Week Plan</b> to jump to any week.</div>':'');}
function renderToday(){const w=currentWeek(),d=todayData();let html='<div class="hero"><div><div class="eyebrow">What to do today</div><h2>'+new Intl.DateTimeFormat('en-IN',{weekday:'long',day:'numeric',month:'long'}).format(new Date())+'</h2><p>Week 1 — '+esc(w.focus)+'</p></div><div class="stack">'+esc(d.time)+' · exact study material below</div></div>'+todayHtml(false)+'<h2 class="section-title">This week at a glance</h2><div class="day-strip">'+DAYS.map(x=>'<button class="day-button '+(x===currentDay()?'active':'')+'" onclick="location.hash=\'today\'">'+x+'</button>').join('')+'</div>';return html;}
function renderWeeks(){return '<div class="callout">Each week contains seven daily sessions. Weekdays are intentionally ~45–75 minutes; Saturday/Sunday carry the deep work.</div><div class="week-grid">'+weeks.map(w=>'<button class="week-card" onclick="location.hash=\'week-'+w.n+'\'"><span>Week '+w.n+'</span><b>'+esc(w.title)+'</b><small>'+esc(w.focus)+'</small><em>7 study sessions</em></button>').join('')+'</div>';}
function renderWeek(n){const w=weeks[n-1];return '<div class="hero"><div><div class="eyebrow">Week '+w.n+'</div><h2>'+esc(w.title)+'</h2><p>'+esc(w.focus)+'</p></div><div class="stack">Mon–Fri: light · Sat/Sun: 5–7h</div></div><div class="study-grid">'+DAYS.map(x=>dayCard(x,w.days[x],w.n)).join('')+'</div>';}
function renderTopics(){return '<div class="topic-grid">'+Object.entries(TOPICS).map(([g,items])=>{const q=pct(items,g+'::');return '<div class="topic-card"><div class="topic-head"><h3>'+esc(g)+'</h3><b>'+q+'%</b></div><div class="bar"><i style="width:'+q+'%"></i></div>'+checklist(items,g+'::')+links(LINKS[g]||[])+'</div>';}).join('')+'</div>';}
function renderProjects(){return '<div class="topic-grid">'+['Project #1','Project #2','Project #3'].map(g=>'<div class="study-card"><h3>'+g+' — SDE 3 Deep Dive</h3>'+checklist(['Problem + requirements','Scale + metrics','Architecture diagram','My exact contribution','Key technical decisions','Alternatives + trade-offs','Failure / incident','Impact','What I would redesign'],g+'::')+'</div>').join('')+'</div><div class="callout">Keep company-sensitive details out of the public GitHub site. Store only abstracted architecture and non-confidential metrics.</div>';}
function renderMocks(){return '<div class="topic-grid">'+['Coding mock #1','Coding mock #2','System-design mock #1','System-design mock #2','LLD mock','Behavioral/project mock','Weekly review'].map(x=>'<div class="study-card"><h3>'+x+'</h3>'+checklist(['Completed','Scored 1–5','Mistakes recorded','Weakness assigned for revision'],x+'::')+'</div>').join('')+'</div>';}
function render(){try{nav();const r=route();$('pageTitle').textContent=r==='today'?'Today':r.startsWith('week-')?'Week '+r.split('-')[1]:({'dashboard':'Dashboard','weeks':'16-Week Plan','topics':'Topics & Checklists','projects':'Projects','mocks':'Mock Interviews'}[r]||'Dashboard');let html=r==='dashboard'?renderDashboard():r==='today'?renderToday():r==='weeks'?renderWeeks():r==='topics'?renderTopics():r==='projects'?renderProjects():r==='mocks'?renderMocks():r.startsWith('week-')?renderWeek(Number(r.split('-')[1])):renderDashboard();$('view').innerHTML=html;}catch(err){$('view').innerHTML='<div class="error"><h2>Dashboard error</h2><p>The study plan could not render.</p><pre>'+esc(err&&err.stack?err.stack:String(err))+'</pre><button onclick="location.reload()">Reload</button></div>';}}
window.addEventListener('hashchange',render);window.toggle=toggle;window.setConf=setConf;window.addEventListener('load',render);