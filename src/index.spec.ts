import test from "ava";
import { expect } from "chai";
import { once, sleep } from "./";
import { EventEmitter } from "events";

const TimingErrorMarginMs = 50;

test("sleep() resolves after the specified delay in milliseconds", async t => {
    const before = Date.now();
    await sleep(200);
    const after = Date.now();

    expect(after - before).gte(200);
    expect(after - before).closeTo(200, TimingErrorMarginMs);
});

test("once() resolves only after the specified event is emitted", async t => {
    const emitter = new EventEmitter();
    const before = Date.now();
    emitter.emit("noise", "is ignored");
    setTimeout(() => emitter.emit("done", "some-result"), 200);

    const result = await once(emitter, "done");
    const after = Date.now();

    expect(result).to.equal("some-result");
    expect(after - before).gte(200);
    expect(after - before).closeTo(200, TimingErrorMarginMs);
});