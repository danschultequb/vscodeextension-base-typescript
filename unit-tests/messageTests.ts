import * as assert from "assert"

import { getMessage } from "../sources/message";

suite("Sample unit test", () =>
{
    test("getMessage()", () =>
    {
        assert.strictEqual(getMessage(), "Hello World from vscodeextension-base!");
    });
});